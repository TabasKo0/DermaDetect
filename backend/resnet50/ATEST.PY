'''resnet 18
import torch
from torchvision import transforms, models
from PIL import Image
import sys
import os

# ---- CONFIG ----
MODEL_PATH = 'best_skin_cancer_resnet18.pt'  # Change if needed
CLASS_NAMES = [
    # Fill with your actual class names, e.g.:
    'akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc'
]
IMG_SIZE = 224

# ---- USAGE ----
# python test_resnet18_skin_cancer.py path_to_image.jpg

def load_model(model_path, num_classes, device):
    model = models.resnet18(weights=None)
    num_features = model.fc.in_features
    model.fc = torch.nn.Linear(num_features, num_classes)
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()
    model.to(device)
    return model

def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((IMG_SIZE, IMG_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    image = Image.open(image_path).convert('RGB')
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

def predict_image(image_path):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = load_model(MODEL_PATH, len(CLASS_NAMES), device)
    image_tensor = preprocess_image(image_path).to(device)

    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        class_idx = predicted.item()
        class_name = CLASS_NAMES[class_idx]
        confidences = torch.nn.functional.softmax(outputs, dim=1)[0]
        confidence = confidences[class_idx].item()
    print(f"Prediction: {class_name} (class #{class_idx})")
    print(f"Confidence: {confidence:.3f}")
    print("All class probabilities:")
    for idx, (name, prob) in enumerate(zip(CLASS_NAMES, confidences.cpu().numpy())):
        print(f"  {name:8s} : {prob:.3f}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python test_resnet18_skin_cancer.py path_to_image.jpg")
        sys.exit(1)
    image_path = sys.argv[1]
    if not os.path.exists(image_path):
        print(f"Image file '{image_path}' does not exist.")
        sys.exit(1)
    predict_image(image_path)
========================================================

import torch
from torchvision import transforms
from PIL import Image
import sys
import os

# ---- CONFIG ----
MODEL_PATH = 'skin_cancer_cnn_model-77.pt'  # Must match your saved model
CLASS_NAMES = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']  # From your metadata and training
IMG_SIZE = 100  # Must match your train.py

def load_model(model_path, num_classes, device):
    import torch.nn as nn
    class SimpleCNN(nn.Module):
        def __init__(self, num_classes):
            super(SimpleCNN, self).__init__()
            self.features = nn.Sequential(
                nn.Conv2d(3, 32, 3, padding=1), nn.ReLU(),
                nn.MaxPool2d(2),
                nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(),
                nn.MaxPool2d(2),
                nn.Conv2d(64, 128, 3, padding=1), nn.ReLU(),
                nn.MaxPool2d(2)
            )
            self.classifier = nn.Sequential(
                nn.Flatten(),
                nn.Linear(128 * (IMG_SIZE // 8) * (IMG_SIZE // 8), 128),
                nn.ReLU(),
                nn.Linear(128, num_classes)
            )
        def forward(self, x):
            x = self.features(x)
            x = self.classifier(x)
            return x

    model = SimpleCNN(num_classes)
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()
    model.to(device)
    return model

def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((IMG_SIZE, IMG_SIZE)),
        transforms.ToTensor()
    ])
    image = Image.open(image_path).convert('RGB')
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

def predict_image(image_path):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = load_model(MODEL_PATH, len(CLASS_NAMES), device)
    image_tensor = preprocess_image(image_path).to(device)

    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        class_idx = predicted.item()
        class_name = CLASS_NAMES[class_idx]
        confidences = torch.nn.functional.softmax(outputs, dim=1)[0]
        confidence = confidences[class_idx].item()
    print(f"Prediction: {class_name} (class #{class_idx})")
    print(f"Confidence: {confidence:.3f}")
    print("All class probabilities:")
    for idx, (name, prob) in enumerate(zip(CLASS_NAMES, confidences.cpu().numpy())):
        print(f"  {name:8s} : {prob:.3f}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python test_cnn_skin_cancer.py path_to_image.jpg")
        sys.exit(1)
    image_path = sys.argv[1]
    if not os.path.exists(image_path):
        print(f"Image file '{image_path}' does not exist.")
        sys.exit(1)
    predict_image(image_path)
    
    
========================================================'''



import torch
from torchvision import transforms, models
from PIL import Image
import sys
import os

# ---- CONFIG ----
MODEL_PATH = 'resnet50/best_skin_cancer_resnet50.pt'  # Must match your saved model!
CLASS_NAMES = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
IMG_SIZE = 224

def load_model(model_path, num_classes, device):
    import torch.nn as nn
    model = models.resnet50(weights=None)
    num_features = model.fc.in_features
    # Match head from training!
    model.fc = nn.Sequential(
        nn.Dropout(0.5),
        nn.Linear(num_features, num_classes)
    )
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()
    model.to(device)
    return model

def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((IMG_SIZE, IMG_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    image = Image.open(image_path).convert('RGB')
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

def predict_image(image_path):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = load_model(MODEL_PATH, len(CLASS_NAMES), device)
    image_tensor = preprocess_image(image_path).to(device)

    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        class_idx = predicted.item()
        class_name = CLASS_NAMES[class_idx]
        confidences = torch.nn.functional.softmax(outputs, dim=1)[0]
        confidence = confidences[class_idx].item()
    print(f"Prediction: {class_name} (class #{class_idx})")
    print(f"Confidence: {confidence:.3f}")
    print("All class probabilities:")
    for idx, (name, prob) in enumerate(zip(CLASS_NAMES, confidences.cpu().numpy())):
        print(f"  {name:8s} : {prob:.3f}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python test_resnet50_skin_cancer.py path_to_image.jpg")
        sys.exit(1)
    image_path = sys.argv[1]
    if not os.path.exists(image_path):
        print(f"Image file '{image_path}' does not exist.")
        sys.exit(1)
    predict_image(image_path)