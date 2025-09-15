import torch
from torchvision import transforms, models
from torch.utils.data import Dataset, DataLoader
from PIL import Image
import pandas as pd
import os

# ---- CONFIG ----
MODEL_PATH = 'resnet50/best_skin_cancer_resnet50.pt'      # Path to your model
METADATA_PATH = '../ai-didgeridoo/archive/HAM10000_metadata.csv'
DATA_DIR_1 = '../ai-didgeridoo/archive/HAM10000_images_part_1'
DATA_DIR_2 = '../ai-didgeridoo/archive/HAM10000_images_part_2'
IMG_SIZE = 224
BATCH_SIZE = 32
CLASS_NAMES = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']

# Helper to get image path
def image_path(row):
    img1 = os.path.join(DATA_DIR_1, row['image_id'])
    img2 = os.path.join(DATA_DIR_2, row['image_id'])
    return img1 if os.path.exists(img1) else img2

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

def load_model(model_path, num_classes, device):
    import torch.nn as nn
    model = models.resnet50(weights=None)
    num_features = model.fc.in_features
    model.fc = nn.Sequential(
        nn.Dropout(0.5),
        nn.Linear(num_features, num_classes)
    )
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()
    model.to(device)
    return model

def main():
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    # Load metadata
    metadata = pd.read_csv(METADATA_PATH)
    metadata['image_id'] = metadata['image_id'].apply(lambda x: x + '.jpg')
    class2idx = {cls: idx for idx, cls in enumerate(CLASS_NAMES)}
    metadata['target'] = metadata['dx'].map(class2idx)
    metadata['filepath'] = metadata.apply(image_path, axis=1)

    # You can choose test or val split here. By default, use all data.
    # For validation split:
    from sklearn.model_selection import train_test_split
    _, val_df = train_test_split(metadata, test_size=0.2, stratify=metadata['dx'], random_state=42)

    transform = transforms.Compose([
        transforms.Resize((IMG_SIZE, IMG_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    val_dataset = SkinCancerDataset(val_df, transform=transform)
    val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=False, num_workers=2, pin_memory=True)

    model = load_model(MODEL_PATH, len(CLASS_NAMES), device)

    correct = 0
    total = 0
    all_preds = []
    all_labels = []

    with torch.no_grad():
        for images, labels in val_loader:
            images = images.to(device)
            labels = labels.to(device)
            outputs = model(images)
            _, predicted = torch.max(outputs, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
            all_preds.extend(predicted.cpu().numpy())
            all_labels.extend(labels.cpu().numpy())

    accuracy = correct / total
    print(f'Accuracy on validation set: {accuracy:.4f} ({correct}/{total})')

    # Optionally, print per-class accuracy
    import numpy as np
    all_preds = np.array(all_preds)
    all_labels = np.array(all_labels)
    print("\nPer-class accuracy:")
    for idx, cls in enumerate(CLASS_NAMES):
        cls_mask = all_labels == idx
        if np.sum(cls_mask) == 0:
            print(f"{cls:8s}: N/A (no samples)")
        else:
            cls_acc = np.sum(all_preds[cls_mask] == idx) / np.sum(cls_mask)
            print(f"{cls:8s}: {cls_acc:.4f} ({np.sum(all_preds[cls_mask] == idx)}/{np.sum(cls_mask)})")

if __name__ == '__main__':
    main()