const metrics = {
  accuracy: 0.8952,
  f1_macro: 0.8862,
  roc_auc_macro: 0.9938,
  samples: 2003,
  model_type: "Balanced ResNet-50",
  per_class: {
    akiec: { precision: 0.9831, recall: 0.8923, f1: 0.9355, support: 65 },
    bcc: { precision: 1.0, recall: 0.7961, f1: 0.8865, support: 103 },
    bkl: { precision: 1.0, recall: 0.7727, f1: 0.8718, support: 220 },
    df: { precision: 1.0, recall: 1.0, f1: 1.0, support: 23 },
    mel: { precision: 0.9588, recall: 0.417, f1: 0.5813, support: 223 },
    nv: { precision: 0.8672, recall: 0.9985, f1: 0.9282, support: 1341 },
    vasc: { precision: 1.0, recall: 1.0, f1: 1.0, support: 28 }
  },
  confusion_matrix: [
    [58,  0,   0,  0,  0, 7,   0],    // akiec
    [ 1, 82,   0,  0,  1, 19,  0],    // bcc
    [ 0,  0, 170,  0,  1, 49,  0],    // bkl
    [ 0,  0,   0, 23,  0,  0,  0],    // df
    [ 0,  0,   0,  0, 93, 130, 0],    // mel
    [ 0,  0,   0,  0,  2, 1339, 0],   // nv
    [ 0,  0,   0,  0,  0, 0,  28]     // vasc
  ],
  classes: ["akiec", "bcc", "bkl", "df", "mel", "nv", "vasc"]
};

function MetricsDashboard({ metrics }) {
  return (
    <section className="process-section" style={{ marginBottom: "2rem" }}>
      <h2>Model Performance ({metrics.model_type})</h2>
      <ul style={{ marginBottom: "1.5rem" }}>
        <li><b>Samples:</b> {metrics.samples}</li>
        <li><b>Accuracy:</b> {(metrics.accuracy * 100).toFixed(2)}%</li>
        <li><b>Macro F1:</b> {metrics.f1_macro.toFixed(4)}</li>
        <li><b>ROC AUC (macro):</b> {metrics.roc_auc_macro.toFixed(4)}</li>
      </ul>
      <h3>Per-Class Metrics</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "1.5rem" }}>
          <thead>
            <tr style={{ background: "var(--card-bg)" }}>
              <th>Class</th>
              <th>Precision</th>
              <th>Recall</th>
              <th>F1</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            {metrics.classes.map(cls => (
              <tr key={cls}>
                <td>{cls}</td>
                <td>{metrics.per_class[cls].precision.toFixed(3)}</td>
                <td>{metrics.per_class[cls].recall.toFixed(3)}</td>
                <td>{metrics.per_class[cls].f1.toFixed(3)}</td>
                <td>{metrics.per_class[cls].support}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ConfusionMatrixDashboard({ metrics }) {
  return (
    <section className="process-section">
      <h3>Confusion Matrix</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th></th>
              {metrics.classes.map(cls => (
                <th key={cls}>{cls}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.confusion_matrix.map((row, i) => (
              <tr key={i}>
                <td><b>{metrics.classes[i]}</b></td>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Process() {
  return (
    <div className="process-container">
      <div className="process-header">
        <h1>Our Process</h1>
        <p>How DermaDetect analyzes skin lesions</p>
      </div>
      <div className="process-content">
        <MetricsDashboard metrics={metrics} />
        <ConfusionMatrixDashboard metrics={metrics} />
        {/* ...existing process sections... */}
        <section className="process-section">
          <h2>Step 1: Image Upload</h2>
          <p>
            <em>Process details coming soon...</em>
          </p>
          <p>
            Information about optimal image quality, lighting conditions, and
            file format requirements will be detailed here.
          </p>
        </section>
        <section className="process-section">
          <h2>Step 2: AI Analysis</h2>
          <p>
            <em>Technical details placeholder...</em>
          </p>
          <p>
            Explanation of the machine learning model, neural network architecture,
            and processing pipeline will be provided here.
          </p>
        </section>
        <section className="process-section">
          <h2>Step 3: Classification</h2>
          <p>
            <em>Classification process coming soon...</em>
          </p>
          <p>
            Details about the different skin condition categories and how the
            system determines the most likely classification.
          </p>
        </section>
        <section className="process-section">
          <h2>Step 4: Results & Recommendations</h2>
          <p>
            <em>Results interpretation placeholder...</em>
          </p>
          <p>
            Guidance on understanding confidence scores, when to seek medical advice,
            and limitations of the AI system.
          </p>
        </section>
      </div>
    </div>
  );
}