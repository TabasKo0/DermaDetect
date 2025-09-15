# DermaDetect: Project Approach & Process Documentation

## Overview

**DermaDetect** is an AI-powered skin cancer detection platform built with a strong focus on model performance, class balance, and practical deployment. This document chronicles the evolution of your approach, from the earliest CNN prototype to advanced deep learning, balancing strategies, and full-stack integration.

---

## 1. Initial Approach: Basic CNN

- **Goal:** Establish a baseline for skin lesion classification.
- **Process:**
  - Built a simple Convolutional Neural Network (CNN) using Keras/TensorFlow or PyTorch.
  - Used raw images, basic preprocessing (resize, normalization).
  - Trained on HAM10000 dataset (or equivalent).
  - Performance was limited by class imbalance and underfitting.

- **Learnings:**  
  - Simple CNNs are easy to implement but struggle with complex medical images.
  - Class imbalance led to poor recall for minority (critical) classes.

---

## 2. Improved Model: ResNet-18

- **Goal:** Boost accuracy with deeper architecture and transfer learning.
- **Process:**
  - Switched to ResNet-18, leveraging pretrained weights (ImageNet).
  - Added data augmentation (flips, rotations).
  - Implemented early stopping and validation monitoring.
  - Stratified train/val split to preserve class distribution.

- **Learnings:**  
  - Deeper models generalize better.
  - Transfer learning accelerates convergence and accuracy.
  - Still observed class imbalance issues, especially poor recall for "melanoma".

---

## 3. Advanced Model: ResNet-50

- **Goal:** Achieve state-of-the-art performance with a deeper backbone.
- **Process:**
  - Migrated to ResNet-50 for higher capacity.
  - Extensive augmentation, dropout, and regularization to fight overfitting.
  - Added monitoring for macro F1-score, not just accuracy.
  - Noticed class imbalance continued to affect critical metrics.

- **Learnings:**  
  - Larger models can overfit without good regularization.
  - Macro F1-score is vital for balanced medical classification.

---

## 4. Robust Class Balancing & Augmentation

- **Goal:** Neutralize class imbalance and maximize recall for rare classes.
- **Process:**
  - Analyzed dataset distribution and implemented dynamic oversampling.
  - Cached augmented images for minority classes to ensure equal support for all classes.
  - Used Focal Loss, class weights, and WeightedRandomSampler.
  - Trained on a balanced, cached dataset with aggressive augmentation for minority classes.
  - Added script logic for proper checkpointing, resume, and patience reset.

- **Learnings:**  
  - Hard balancing via image augmentation and caching is effective.
  - Focal Loss/weighted sampling further improves minority class performance.
  - Proper checkpointing logic ensures smooth fine-tuning and resume.

---

## 5. Frontend: Next.js Application

- **Goal:** Build a user-friendly interface for skin lesion image upload and AI inference.
- **Process:**
  - Developed a Next.js web app for users to upload skin lesion images.
  - Integrated real-time feedback and display of classification results.
  - Designed UI with medical trust and clarity in mind.

---

## 6. API Layer: Model Serving & Inference

- **Goal:** Bridge frontend and backend for scalable inference.
- **Process:**
  - Built REST APIs (typically using FastAPI/Flask) for:
    - Image upload and preprocessing.
    - Model inference endpoint.
    - Results and confidence scores delivery.
  - Ensured CORS and secure communication with Next.js frontend.
  - Can be extended for batch inference, logging, and feedback.

---

## 7. Efficiency & Optimization (Post-Training)

- **Goal:** Prepare model for real-world deployment.
- **Process:**
  - Explored post-training quantization (PyTorch), TorchScript, and ONNX conversion for faster inference and smaller size.
  - Optionally, pruning and distillation for edge deployment.

---

## 8. Monitoring, Evaluation & Iteration

- **Goal:** Ensure clinical reliability and continuous improvement.
- **Process:**
  - Validated model with macro F1, class-wise recall & confusion matrix.
  - Iteratively tuned augmentation, sampling, and loss weighting.
  - Monitored performance on minority (melanoma) and majority classes.

---

## Summary Table

| Stage         | Model        | Class Balancing | Frontend | API Layer | Optimization |
|---------------|-------------|-----------------|----------|-----------|--------------|
| Baseline      | CNN         | None            | No       | No        | No           |
| Transfer      | ResNet-18   | Basic sampling  | No       | No        | No           |
| SOTA          | ResNet-50   | Weighted/Focal  | No       | No        | No           |
| Advanced      | ResNet-50   | Aggressive + Cached aug | No | No       | No           |
| Full-stack    | ResNet-50   | Advanced        | Yes      | Yes       | Yes          |

---

## Key Takeaways

- **Start simple, iterate fast:** Baseline CNNs are for learning; advanced architectures are for performance.
- **Class balance is crucial:** Especially in medical AI—use augmentation, weighted loss, and caching.
- **Full-stack matters:** Real impact needs a smooth frontend and robust APIs.
- **Efficiency is the final step:** Quantization and optimization unlock real-world use.

---

## Next Steps

- Further optimize for recall on critical classes (melanoma).
- Deploy with model quantization or ONNX for production.
- Expand to other skin conditions and add feedback loops.


# DermaDetect Web App Setup & Running Instructions

This guide covers **how to run the DermaDetect web application for inference** using a pre-trained model.  
You do **not** need to run training—just set up the backend API, install dependencies, and launch the Next.js frontend.

---

## 1. **Prerequisites**

- Python 3.9+
- Node.js 18+
- [pip](https://pip.pypa.io/en/stable/)
- [npm](https://www.npmjs.com/)
- Pre-trained model file (e.g., `best_skin_cancer_resnet50.pt` in the backend directory)
- Dataset and cache folders not required for inference

---

## 2. **Clone the Repository**

```bash
git clone https://github.com/your-username/dermadetect.git
cd dermadetect
```

---

## 3. **Backend Setup (API for Model Inference)**

1. **Create a Python virtual environment (recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate        # On Linux/macOS
    .\venv\Scripts\activate         # On Windows
    ```

2. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

    *Key packages: `torch`, `torchvision`, `flask` or `fastapi`, `pillow`*

3. **Place your pre-trained model checkpoint** (e.g., `best_skin_cancer_resnet50.pt`) in the backend directory as expected by `app.py`.

4. **Run the backend API server:**

    ```bash
    python app.py
    ```

    - The API will start, typically on `http://localhost:8000` or `http://localhost:5000`
    - Endpoints will allow image upload and return skin lesion classification results.

---

## 4. **Frontend Setup (Next.js Web App)**

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install Node.js dependencies:**

    ```bash
    npm install
    ```

3. **Configure the API URL:**
    - Edit `.env.local` or `config.js` to set the API endpoint (e.g., `http://localhost:8000`).

4. **Run the Next.js development server:**

    ```bash
    npm run dev
    ```

    - The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 5. **Usage**

- Open your browser at [http://localhost:3000](http://localhost:3000)
- Upload a skin lesion image using the provided interface.
- View classification results and confidence scores.

---

## 6. **Troubleshooting**

| Issue                        | Solution                                               |
|------------------------------|--------------------------------------------------------|
| API not reachable            | Check that `app.py` is running, and port matches config|
| CORS error in frontend       | Ensure backend sets correct CORS headers               |
| Model file missing           | Place `best_skin_cancer_resnet50.pt` in backend folder |
| Dependency errors            | Double-check Python and Node versions                  |

---

## 7. **Optional: Production Deployment**

- For production, use a robust server (e.g., `gunicorn` for Python API, `pm2` for Node.js).
- Consider environment variables for API URLs.
- Secure API endpoints and enable HTTPS.

---

**No training required—just inference with your existing model!**


---

*DermaDetect is positioned as a balanced, efficient, and user-friendly AI solution for dermatological risk assessment.*
