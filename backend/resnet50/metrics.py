import torch
from torchvision import transforms, models
from torch.utils.data import Dataset, DataLoader
from PIL import Image
import pandas as pd
import os
import numpy as np
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score, confusion_matrix,
    classification_report, roc_auc_score
)
import json
import matplotlib.pyplot as plt
import seaborn as sns

# ==== CONFIG ====
MODEL_PATH = 'resnet50/best_skin_cancer_resnet50.pt'
METADATA_PATH = '../ai-didgeridoo/archive/HAM10000_metadata.csv'
DATA_DIR_1 = '../ai-didgeridoo/archive/HAM10000_images_part_1'
DATA_DIR_2 = '../ai-didgeridoo/archive/HAM10000_images_part_2'
IMG_SIZE = 224
BATCH_SIZE = 32
CLASS_NAMES = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
OUTPUT_DIR = 'website_metrics_logs'
os.makedirs(OUTPUT_DIR, exist_ok=True)

def image_path(row):
    img1 = os.path.join(DATA_DIR_1, row['image_id'])
    img2 = os.path.join(DATA_DIR_2, row['image_id'])
    return img1 if os.path.exists(img1) else img2

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

def plot_confusion_matrix(cm, class_names, filename):
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=class_names, yticklabels=class_names)
    plt.xlabel('Predicted')
    plt.ylabel('True')
    plt.title('Confusion Matrix')
    plt.tight_layout()
    plt.savefig(filename)
    plt.close()

def main():
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    metadata = pd.read_csv(METADATA_PATH)
    metadata['image_id'] = metadata['image_id'].apply(lambda x: x + '.jpg')
    class2idx = {cls: idx for idx, cls in enumerate(CLASS_NAMES)}
    metadata['target'] = metadata['dx'].map(class2idx)
    metadata['filepath'] = metadata.apply(image_path, axis=1)

    # Validation split as in training
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

    all_preds, all_labels, all_probs = [], [], []
    with torch.no_grad():
        for images, labels in val_loader:
            images = images.to(device)
            labels = labels.to(device)
            outputs = model(images)
            probs = torch.nn.functional.softmax(outputs, dim=1)
            _, predicted = torch.max(outputs, 1)
            all_preds.extend(predicted.cpu().numpy())
            all_labels.extend(labels.cpu().numpy())
            all_probs.extend(probs.cpu().numpy())

    all_preds = np.array(all_preds)
    all_labels = np.array(all_labels)
    all_probs = np.array(all_probs)

    # METRIC CALCULATIONS
    accuracy = accuracy_score(all_labels, all_preds)
    f1_macro = f1_score(all_labels, all_preds, average='macro', zero_division=0)
    roc_auc = roc_auc_score(np.eye(len(CLASS_NAMES))[all_labels], all_probs, average='macro', multi_class='ovr')
    conf_matrix = confusion_matrix(all_labels, all_preds)
    class_report = classification_report(all_labels, all_preds, target_names=CLASS_NAMES, output_dict=True, zero_division=0)
    train_f1 = None  # If available, log from training

    # LOGGING METRICS FOR WEBSITE
    metrics_report = {
        "accuracy": round(accuracy, 4),
        "f1_macro": round(f1_macro, 4),
        "roc_auc_macro": round(roc_auc, 4),
        "train_f1": train_f1 if train_f1 is not None else "N/A",
        "per_class": {cls: {
            "precision": round(class_report[cls]["precision"], 4),
            "recall": round(class_report[cls]["recall"], 4),
            "f1_score": round(class_report[cls]["f1-score"], 4),
            "support": int(class_report[cls]["support"])
        } for cls in CLASS_NAMES},
        "confusion_matrix": conf_matrix.tolist(),
        "samples": int(len(all_labels))
    }
    with open(f"{OUTPUT_DIR}/metrics_report.json", "w") as f:
        json.dump(metrics_report, f, indent=2)
    print(f"Metrics logged to {OUTPUT_DIR}/metrics_report.json")

    # SAVE RAW PREDICTIONS
    pd.DataFrame({
        'true_label': [CLASS_NAMES[i] for i in all_labels],
        'pred_label': [CLASS_NAMES[i] for i in all_preds],
        **{f'prob_{cls}': all_probs[:,i] for i,cls in enumerate(CLASS_NAMES)}
    }).to_csv(f"{OUTPUT_DIR}/raw_predictions.csv", index=False)
    print(f"Raw predictions/probabilities saved to {OUTPUT_DIR}/raw_predictions.csv")

    # SAVE CONFUSION MATRIX PLOT
    plot_confusion_matrix(conf_matrix, CLASS_NAMES, f"{OUTPUT_DIR}/confusion_matrix.png")
    print(f"Confusion matrix plot saved as {OUTPUT_DIR}/confusion_matrix.png")

    # SAVE CLASSIFICATION REPORT AS JSON
    with open(f"{OUTPUT_DIR}/classification_report.json", "w") as f:
        json.dump(class_report, f, indent=2)
    print(f"Classification report saved as {OUTPUT_DIR}/classification_report.json")

if __name__ == '__main__':
    main()