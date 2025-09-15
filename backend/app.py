import os
from flask import Flask, request, jsonify
from PIL import Image
import torch
from torchvision import transforms, models

# ---- CONFIG ----
MODEL_PATH = 'resnet50/best_skin_cancer_resnet50.pt'
CLASS_NAMES = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
IMG_SIZE = 224

app = Flask(__name__)

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

def preprocess_image(image):
    transform = transforms.Compose([
        transforms.Resize((IMG_SIZE, IMG_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    image = image.convert('RGB')
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

# Load the model once at startup
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = load_model(MODEL_PATH, len(CLASS_NAMES), device)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided under "image" field.'}), 400
    file = request.files['image']
    try:
        img = Image.open(file.stream)
    except Exception as e:
        return jsonify({'error': f'Could not open image: {str(e)}'}), 400

    image_tensor = preprocess_image(img).to(device)
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        class_idx = predicted.item()
        class_name = CLASS_NAMES[class_idx]
        confidences = torch.nn.functional.softmax(outputs, dim=1)[0]
        all_probs = {name: float(prob) for name, prob in zip(CLASS_NAMES, confidences.cpu().numpy())}
        confidence = float(confidences[class_idx].item())
        #all_probs = {name: f"{float(prob):.4f}" for name, prob in zip(CLASS_NAMES, confidences.cpu().numpy())}
        #confidence = f"{float(confidences[class_idx].item()):.4f}"
    
    return jsonify({
        'prediction': class_name,
        'class_idx': class_idx,
        'confidence': confidence,
        'class_probabilities': all_probs
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)