"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DetectPage() {
	const [image, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [dragActive, setDragActive] = useState(false);
	const [captureMode, setCaptureMode] = useState(false); // Toggle between file upload and camera capture
	const [stream, setStream] = useState(null);
	const [cameraError, setCameraError] = useState(null);
	const inputRef = useRef(null);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	// Class information mapping
	const classInfo = {
		akiec: {
			fullName: "Actinic Keratoses and Intraepithelial Carcinoma (Bowen's disease)",
			description: "Precancerous or cancerous lesions, often scaly or rough."
		},
		bcc: {
			fullName: "Basal Cell Carcinoma",
			description: "Most common type of skin cancer, usually slow-growing."
		},
		bkl: {
			fullName: "Benign Keratosis-like Lesions",
			description: "Includes seborrheic keratoses, lichenoid keratoses, and solar lentigines (benign, non-cancerous)."
		},
		df: {
			fullName: "Dermatofibroma",
			description: "Benign fibrous skin nodule."
		},
		mel: {
			fullName: "Melanoma",
			description: "Dangerous skin cancer that can spread rapidly."
		},
		nv: {
			fullName: "Melanocytic Nevus",
			description: "Mole (benign proliferation of melanocytes)."
		},
		vasc: {
			fullName: "Vascular Lesion",
			description: "Includes angiomas, hemangiomas, and pyogenic granulomas (benign blood vessel growths)."
		}
	};

	// Camera functionality
	const startCamera = async () => {
		try {
			setCameraError(null);
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: { 
					width: { ideal: 1280 },
					height: { ideal: 720 },
					facingMode: { ideal: 'environment' } // Use back camera if available
				}
			});
			setStream(mediaStream);
			if (videoRef.current) {
				videoRef.current.srcObject = mediaStream;
				videoRef.current.play();
			}
		} catch (err) {
			console.error('Error accessing camera:', err);
			setCameraError('Unable to access camera. Please check permissions and try again.');
		}
	};

	const stopCamera = () => {
		if (stream) {
			stream.getTracks().forEach(track => track.stop());
			setStream(null);
		}
		if (videoRef.current) {
			videoRef.current.srcObject = null;
		}
	};

	const captureImage = () => {
		if (!videoRef.current || !canvasRef.current) return;

		const video = videoRef.current;
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		// Set canvas dimensions to match video
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		// Draw the video frame to canvas
		context.drawImage(video, 0, 0, canvas.width, canvas.height);

		// Convert canvas to blob
		canvas.toBlob((blob) => {
			if (blob) {
				// Create a File object from the blob
				const file = new File([blob], 'camera-capture.jpg', { type: 'image/jpeg' });
				setImage(file);
				
				// Create preview URL
				const previewUrl = URL.createObjectURL(blob);
				setImagePreview(previewUrl);
				
				// Clear any previous results
				setResult(null);
				setError(null);
				
				// Stop the camera after capture
				stopCamera();
				setCaptureMode(false);
			}
		}, 'image/jpeg', 0.8);
	};

	const toggleCaptureMode = () => {
		const newMode = !captureMode;
		setCaptureMode(newMode);
		
		if (newMode) {
			// Clear any existing image when switching to camera mode
			setImage(null);
			setImagePreview(null);
			setResult(null);
			setError(null);
			setCameraError(null);
			startCamera();
		} else {
			stopCamera();
		}
	};

	// Cleanup camera stream on unmount
	useEffect(() => {
		return () => {
			if (stream) {
				stream.getTracks().forEach(track => track.stop());
			}
		};
	}, [stream]);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
			setResult(null);
			setError(null);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setImage(e.dataTransfer.files[0]);
			setImagePreview(URL.createObjectURL(e.dataTransfer.files[0]));
			setResult(null);
			setError(null);
		}
	};

	const createChartData = (classProbabilities) => {
		if (!classProbabilities) return null;
		
		const labels = Object.keys(classProbabilities).map(cls => {
			return classInfo[cls] ? classInfo[cls].fullName : cls;
		});
		
		const data = Object.values(classProbabilities).map(prob => {
			if (typeof prob === 'string' || typeof prob === 'number') {
				return parseFloat(prob) * 100;
			}
			return 0;
		});

		const colors = [
			'#FF6384',
			'#36A2EB', 
			'#FFCE56',
			'#4BC0C0',
			'#9966FF',
			'#FF9F40',
			'#FF6384'
		];

		return {
			labels,
			datasets: [{
				data,
				backgroundColor: colors.slice(0, labels.length),
				borderColor: colors.slice(0, labels.length).map(color => color.replace('0.6', '1')),
				borderWidth: 2
			}]
		};
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'bottom',
				labels: {
					color: 'var(--foreground)',
					font: {
						size: 12
					},
					padding: 15
				}
			},
			tooltip: {
				callbacks: {
					label: function(context) {
						return context.label + ': ' + context.parsed.toFixed(2) + '%';
					}
				}
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!image) return;
		setLoading(true);
		setError(null);
		setResult(null);
		try {
			const formData = new FormData();
			formData.append("image", image);
			const res = await fetch("../api/analyze", {
				method: "POST",
				body: formData,
			});
			if (!res.ok) throw new Error("API error");
			const data = await res.json();
			setResult(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="analyze-card" style={{ maxWidth: "100vw", minHeight: "70vh", padding: "2rem" }}>
			<div style={{ padding: "10px", fontSize: "30px", display: "flex", justifyContent: "center", paddingBottom: "50px" }}>
				Image Detection
			</div>
			<div className="analysis-container">
				<div>
					{/* Mode toggle buttons */}
					<div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
						<button
							type="button"
							onClick={() => !captureMode && toggleCaptureMode()}
							disabled={captureMode}
							style={{
								padding: "0.5rem 1rem",
								border: "2px solid var(--button-bg)",
								borderRadius: "4px",
								background: !captureMode ? "var(--button-bg)" : "transparent",
								color: !captureMode ? "var(--button-text)" : "var(--button-bg)",
								cursor: captureMode ? "not-allowed" : "pointer",
								fontWeight: "500"
							}}
						>
							📁 Upload File
						</button>
						<button
							type="button"
							onClick={toggleCaptureMode}
							style={{
								padding: "0.5rem 1rem",
								border: "2px solid var(--button-bg)",
								borderRadius: "4px",
								background: captureMode ? "var(--button-bg)" : "transparent",
								color: captureMode ? "var(--button-text)" : "var(--button-bg)",
								cursor: "pointer",
								fontWeight: "500"
							}}
						>
							📷 {captureMode ? "Stop Camera" : "Use Camera"}
						</button>
					</div>

					<form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
						{!captureMode ? (
							// File upload mode
							<div
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
								onDrop={handleDrop}
								style={{
									border: imagePreview ? "none" : (dragActive ? "2px solid var(--button-bg)" : "2px dashed var(--border-color)"),
									borderRadius: 8,
									padding: imagePreview ? "0" : "2rem",
									textAlign: "center",
									background: imagePreview ? "transparent" : (dragActive ? "rgba(25, 118, 210, 0.1)" : "var(--card-bg)"),
									marginBottom: "1rem",
									cursor: "pointer",
									position: "relative",
									minHeight: imagePreview ? "auto" : "150px",
									minWidth: "36vw",
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								}}
								onClick={() => inputRef.current && inputRef.current.click()}
							>
								{imagePreview ? (
									<Image 
										src={imagePreview} 
										alt="Selected" 
										width={400}
										height={300}
										style={{ 
											maxWidth: "100%", 
											maxHeight: "300px", 
											objectFit: "contain",
											borderRadius: 8
										}} 
									/>
								) : (
									<span style={{ color: "var(--foreground)", fontWeight: "500" }}>
										Drag & drop an image here, or click to select
									</span>
								)}
								<input
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									ref={inputRef}
									style={{ display: "none" }}
								/>
							</div>
						) : (
							// Camera capture mode
							<div style={{ marginBottom: "1rem" }}>
								{cameraError ? (
									<div style={{ 
										color: "#d32f2f", 
										padding: "1rem", 
										border: "1px solid #d32f2f", 
										borderRadius: "4px",
										textAlign: "center"
									}}>
										{cameraError}
									</div>
								) : (
									<div style={{ 
										position: "relative", 
										display: "flex", 
										flexDirection: "column", 
										alignItems: "center",
										gap: "1rem"
									}}>
										{imagePreview ? (
											// Show captured image
											<Image 
												src={imagePreview} 
												alt="Captured" 
												width={400}
												height={300}
												style={{ 
													maxWidth: "100%", 
													maxHeight: "300px", 
													objectFit: "contain",
													borderRadius: 8
												}} 
											/>
										) : (
											// Show camera preview
											<>
												<video
													ref={videoRef}
													autoPlay
													playsInline
													muted
													style={{
														width: "100%",
														maxWidth: "400px",
														height: "300px",
														objectFit: "cover",
														borderRadius: 8,
														background: "#000"
													}}
												/>
												<button
													type="button"
													onClick={captureImage}
													disabled={!stream}
													style={{
														padding: "0.75rem 1.5rem",
														background: "var(--button-bg)",
														color: "var(--button-text)",
														border: "none",
														borderRadius: "25px",
														cursor: stream ? "pointer" : "not-allowed",
														fontWeight: "600",
														fontSize: "1rem",
														opacity: stream ? 1 : 0.6
													}}
												>
													📸 Capture Photo
												</button>
											</>
										)}
										<canvas ref={canvasRef} style={{ display: "none" }} />
									</div>
								)}
							</div>
						)}
						
						<button 
							type="submit" 
							disabled={loading || !image} 
							style={{ 
								marginLeft: "1rem",
								background: "var(--button-bg)",
								color: "var(--button-text)",
								border: "none",
								padding: "0.5rem 1rem",
								borderRadius: "4px",
								cursor: loading || !image ? "not-allowed" : "pointer",
								opacity: loading || !image ? 0.6 : 1
							}}
						>
							{loading ? "Analyzing..." : "Analyze"}
						</button>
					</form>
				</div>
				{error && <div style={{ color: "#d32f2f" }}>Error: {error}</div>}
				<div className="result-card">
					<h3>Result</h3>
					{result ? (
						<>
							<div><strong>Prediction:</strong> {result.prediction}</div>
							{classInfo[result.prediction] && (
								<div className="class-info-card">
									<div><strong>Full Name:</strong> {classInfo[result.prediction].fullName}</div>
									<div style={{ marginTop: "0.5rem" }}><strong>Description:</strong> {classInfo[result.prediction].description}</div>
								</div>
							)}
							<div><strong>Class Index:</strong> {result.class_idx}</div>
							<div><strong>Confidence:</strong> {result.confidence !== undefined ? `${(parseFloat(result.confidence) * 100).toFixed(2)}%` : ''}</div>
							{result.class_probabilities && (
								<div style={{ marginTop: "1.5rem" }}>
									<strong>Class Probabilities:</strong>
									<div style={{ height: "300px", marginTop: "1rem" }}>
										<Pie 
											data={createChartData(result.class_probabilities)} 
											options={chartOptions}
										/>
									</div>
								</div>
							)}
						</>
					) : (
						<div style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
							Upload an image and click &quot;Analyze&quot; to see results here.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}