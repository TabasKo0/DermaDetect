import os
import numpy as np
import pandas as pd
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import transforms, models
from torch.utils.data import Dataset, DataLoader
from PIL import Image
from sklearn.model_selection import train_test_split
from sklearn.utils.class_weight import compute_class_weight

# Paths
DATA_DIR_1 = '../../ai-didgeridoo/archive/HAM10000_images_part_1'
DATA_DIR_2 = '../../ai-didgeridoo/archive/HAM10000_images_part_2'
METADATA_PATH = '../../ai-didgeridoo/archive/HAM10000_metadata.csv'
LOG_PATH = './training_log.csv'  # <-- NEW

# Load metadata and process
metadata = pd.read_csv(METADATA_PATH)
metadata['image_id'] = metadata['image_id'].apply(lambda x: x + '.jpg')
metadata['dx'] = metadata['dx'].astype(str)
def image_path(row):
    img1 = os.path.join(DATA_DIR_1, row['image_id'])
    img2 = os.path.join(DATA_DIR_2, row['image_id'])
    return img1 if os.path.exists(img1) else img2
metadata['filepath'] = metadata.apply(image_path, axis=1)
class_names = sorted(metadata['dx'].unique())
class2idx = {cls: idx for idx, cls in enumerate(class_names)}
metadata['target'] = metadata['dx'].map(class2idx)

# Train/validation split
train_df, val_df = train_test_split(
    metadata, test_size=0.2, stratify=metadata['dx'], random_state=42
)

IMG_SIZE = 224
BATCH_SIZE = 32

# Dataset class
class SkinCancerDataset(Dataset):
    def __init__(self, dataframe, transform=None):
        self.df = dataframe.reset_index(drop=True)
        self.transform = transform
    def __len__(self):
        return len(self.df)
    def __getitem__(self, idx):
        img_path = self.df.loc[idx, 'filepath']
        label = self.df.loc[idx, 'target']
        image = Image.open(img_path).convert('RGB')
        if self.transform:
            image = self.transform(image)
        return image, label

# Augmentation and normalization
train_transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.RandomHorizontalFlip(),
    transforms.RandomVerticalFlip(),
    transforms.RandomRotation(20),
    transforms.ColorJitter(brightness=0.3, contrast=0.3, saturation=0.3, hue=0.1),
    transforms.RandomAffine(degrees=0, translate=(0.1, 0.1), scale=(0.9, 1.1)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])
val_transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

train_dataset = SkinCancerDataset(train_df, transform=train_transform)
val_dataset = SkinCancerDataset(val_df, transform=val_transform)

if __name__ == "__main__":
    print("CUDA available:", torch.cuda.is_available())
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=2, pin_memory=True)
    val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=False, num_workers=2, pin_memory=True)

    # Compute class weights for imbalance
    class_weights = compute_class_weight(
        class_weight='balanced',
        classes=np.unique(train_df['target']),
        y=train_df['target']
    )
    class_weights = torch.tensor(class_weights, dtype=torch.float).to(device)

    # Load ResNet50 for better performance
    model = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V2)
    num_features = model.fc.in_features
    model.fc = nn.Sequential(
        nn.Dropout(0.5),
        nn.Linear(num_features, len(class_names))
    )
    model = model.to(device)

    # Loss, optimizer, scheduler
    criterion = nn.CrossEntropyLoss(weight=class_weights)
    optimizer = optim.AdamW(model.parameters(), lr=3e-4)
    scheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer, mode='max', factor=0.5, patience=5)

    # If checkpoint exists, resume model and optimizer
    model_ckpt = 'best_skin_cancer_resnet50.pt'
    optim_ckpt = 'optimizer_resnet50.pt'
    start_epoch = 0
    best_val_acc = 0.0
    epochs_no_improve = 0
    patience = 10
    EPOCHS = 80

    # Initialize log DataFrame (or resume if exists)
    if os.path.exists(LOG_PATH):
        log_df = pd.read_csv(LOG_PATH)
        start_epoch = log_df['epoch'].iloc[-1] + 1
        print(f"Resuming logging from epoch {start_epoch}")
    else:
        log_df = pd.DataFrame(columns=['epoch', 'train_loss', 'train_acc', 'val_loss', 'val_acc'])

    if os.path.exists(model_ckpt):
        print(f"Resuming from checkpoint {model_ckpt}")
        model.load_state_dict(torch.load(model_ckpt, map_location=device))
        if os.path.exists(optim_ckpt):
            optimizer.load_state_dict(torch.load(optim_ckpt, map_location=device))
        # Optionally, load other training states (epoch, best_val_acc, epochs_no_improve)
        # For simplicity, we reset patience/best_val_acc here.

    for epoch in range(start_epoch, EPOCHS):
        model.train()
        running_loss = 0.0
        running_corrects = 0
        total = 0
        for images, labels in train_loader:
            images = images.to(device, non_blocking=True)
            labels = labels.to(device, non_blocking=True)
            optimizer.zero_grad()
            outputs = model(images)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()
            _, preds = torch.max(outputs, 1)
            running_loss += loss.item() * images.size(0)
            running_corrects += torch.sum(preds == labels.data)
            total += labels.size(0)
        train_loss = running_loss / total
        train_acc = running_corrects.double().item() / total

        model.eval()
        val_loss = 0.0
        val_corrects = 0
        val_total = 0
        with torch.no_grad():
            for images, labels in val_loader:
                images = images.to(device, non_blocking=True)
                labels = labels.to(device, non_blocking=True)
                outputs = model(images)
                loss = criterion(outputs, labels)
                _, preds = torch.max(outputs, 1)
                val_loss += loss.item() * images.size(0)
                val_corrects += torch.sum(preds == labels.data)
                val_total += labels.size(0)
        val_loss = val_loss / val_total
        val_acc = val_corrects.double().item() / val_total

        print(f"Epoch {epoch+1}/{EPOCHS} - Train Loss: {train_loss:.4f}, Train Acc: {train_acc:.4f} | Val Loss: {val_loss:.4f}, Val Acc: {val_acc:.4f}")

        # Save metrics to log
        log_df.loc[len(log_df)] = [epoch+1, train_loss, train_acc, val_loss, val_acc]
        log_df.to_csv(LOG_PATH, index=False)

        # Scheduler step
        scheduler.step(val_acc)

        # Early stopping logic
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            epochs_no_improve = 0
            torch.save(model.state_dict(), model_ckpt)
            torch.save(optimizer.state_dict(), optim_ckpt)
            print(f"Model improved and saved as {model_ckpt}")
        else:
            epochs_no_improve += 1
            print(f"No improvement for {epochs_no_improve} epoch(s).")

        if epochs_no_improve >= patience:
            print(f"Early stopping triggered at epoch {epoch+1}. Best val accuracy: {best_val_acc:.4f}")
            break

    print("Training complete.")