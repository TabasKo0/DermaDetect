
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to DermaDetect</h1>
        <p className="welcome-description">
          AI-powered skin lesion analysis to help detect and classify skin conditions. 
          Upload an image of a skin lesion and get instant analysis with confidence scores.
        </p>
        <Link href="/analyze" className="analyze-button">
          Start Analysis
        </Link>
      </div>
      <div className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Detection</h3>
            <p>Advanced machine learning models trained on medical datasets</p>
          </div>
          <div className="feature-card">
            <h3>Multiple Classifications</h3>
            <p>Detects various skin conditions including melanoma, carcinoma, and benign lesions</p>
          </div>
          <div className="feature-card">
            <h3>Confidence Scoring</h3>
            <p>Get detailed confidence scores and probability distributions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
