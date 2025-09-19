module.exports = [
"[project]/acm/legion/src/app/analyze/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function DetectPage() {
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chartKey, setChartKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Force chart re-render on theme change
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listen for theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new MutationObserver(()=>{
            setChartKey((prev)=>prev + 1); // Force chart re-render
        });
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    // Class information mapping
    const classInfo = {
        akiec: {
            fullName: "Actinic Keratoses and Intraepithelial Carcinoma (Bowen's disease)",
            description: "Precancerous or cancerous lesions, often scaly or rough.",
            dangerLevel: "malignant"
        },
        bcc: {
            fullName: "Basal Cell Carcinoma",
            description: "Most common type of skin cancer, usually slow-growing.",
            dangerLevel: "malignant"
        },
        bkl: {
            fullName: "Benign Keratosis-like Lesions",
            description: "Includes seborrheic keratoses, lichenoid keratoses, and solar lentigines (benign, non-cancerous).",
            dangerLevel: "benign"
        },
        df: {
            fullName: "Dermatofibroma",
            description: "Benign fibrous skin nodule.",
            dangerLevel: "benign"
        },
        mel: {
            fullName: "Melanoma",
            description: "Dangerous skin cancer that can spread rapidly.",
            dangerLevel: "malignant"
        },
        nv: {
            fullName: "Melanocytic Nevus",
            description: "Mole (benign proliferation of melanocytes).",
            dangerLevel: "benign"
        },
        vasc: {
            fullName: "Vascular Lesion",
            description: "Includes angiomas, hemangiomas, and pyogenic granulomas (benign blood vessel growths).",
            dangerLevel: "benign"
        }
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            setResult(null);
            setError(null);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };
    const handleDrop = (e)=>{
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
    const createChartData = (classProbabilities)=>{
        if (!classProbabilities) return null;
        const labels = Object.keys(classProbabilities).map((cls)=>{
            return classInfo[cls] ? classInfo[cls].fullName : cls;
        });
        const data = Object.values(classProbabilities).map((prob)=>{
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
            datasets: [
                {
                    data,
                    backgroundColor: colors.slice(0, labels.length),
                    borderColor: colors.slice(0, labels.length).map((color)=>color.replace('0.6', '1')),
                    borderWidth: 2
                }
            ]
        };
    };
    const getChartOptions = ()=>{
        // Get the computed CSS variable value
        const foregroundColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim() || '#171717';
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: foregroundColor,
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
    };
    const handleSubmit = async (e)=>{
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
                body: formData
            });
            if (!res.ok) throw new Error("API error");
            const data = await res.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "analyze-card",
        style: {
            maxWidth: "100vw",
            minHeight: "70vh",
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "10px",
                    fontSize: "30px",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "50px"
                },
                children: "Image Detection"
            }, void 0, false, {
                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                lineNumber: 201,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            style: {
                                marginBottom: "2rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onDragOver: handleDragOver,
                                    onDragLeave: handleDragLeave,
                                    onDrop: handleDrop,
                                    style: {
                                        border: imagePreview ? "none" : dragActive ? "2px solid var(--button-bg)" : "2px dashed var(--border-color)",
                                        borderRadius: 8,
                                        padding: imagePreview ? "0" : "2rem",
                                        textAlign: "center",
                                        background: imagePreview ? "transparent" : dragActive ? "rgba(25, 118, 210, 0.1)" : "var(--card-bg)",
                                        marginBottom: "1rem",
                                        cursor: "pointer",
                                        position: "relative",
                                        minHeight: imagePreview ? "auto" : "150px",
                                        minWidth: "36vw",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    onClick: ()=>inputRef.current && inputRef.current.click(),
                                    children: [
                                        imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: imagePreview,
                                            alt: "Selected",
                                            width: 400,
                                            height: 300,
                                            style: {
                                                maxWidth: "100%",
                                                maxHeight: "300px",
                                                objectFit: "contain",
                                                borderRadius: 8
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                            lineNumber: 229,
                                            columnNumber: 9
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--foreground)",
                                                fontWeight: "500"
                                            },
                                            children: "Drag & drop an image here, or click to select"
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                            lineNumber: 242,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleImageChange,
                                            ref: inputRef,
                                            style: {
                                                display: "none"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                            lineNumber: 246,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                    lineNumber: 207,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !image,
                                    style: {
                                        marginLeft: "1rem",
                                        background: "var(--button-bg)",
                                        color: "var(--button-text)",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "4px",
                                        cursor: loading || !image ? "not-allowed" : "pointer",
                                        opacity: loading || !image ? 0.6 : 1
                                    },
                                    children: loading ? "Analyzing..." : "Analyze"
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                    lineNumber: 254,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                            lineNumber: 206,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                        lineNumber: 205,
                        columnNumber: 5
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#d32f2f"
                        },
                        children: [
                            "Error: ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                        lineNumber: 272,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-card",
                        style: {
                            border: result && classInfo[result.prediction] ? `2px solid ${classInfo[result.prediction].dangerLevel === "malignant" ? "#d32f2f" : "#388e3c"}` : "2px solid var(--border-color)",
                            borderRadius: "8px",
                            padding: "1.5rem",
                            marginTop: "2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Result"
                            }, void 0, false, {
                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                lineNumber: 284,
                                columnNumber: 6
                            }, this),
                            result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Prediction:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 287,
                                                columnNumber: 13
                                            }, this),
                                            " ",
                                            result.prediction
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 287,
                                        columnNumber: 8
                                    }, this),
                                    classInfo[result.prediction] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "class-info-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Full Name:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                        lineNumber: 290,
                                                        columnNumber: 15
                                                    }, this),
                                                    " ",
                                                    classInfo[result.prediction].fullName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 290,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Danger Level:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                        lineNumber: 291,
                                                        columnNumber: 47
                                                    }, this),
                                                    " ",
                                                    classInfo[result.prediction].dangerLevel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 291,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Description:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                        lineNumber: 292,
                                                        columnNumber: 47
                                                    }, this),
                                                    " ",
                                                    classInfo[result.prediction].description
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 292,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 289,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Class Index:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 295,
                                                columnNumber: 13
                                            }, this),
                                            " ",
                                            result.class_idx
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 295,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Confidence:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 296,
                                                columnNumber: 13
                                            }, this),
                                            " ",
                                            result.confidence !== undefined ? `${(parseFloat(result.confidence) * 100).toFixed(2)}%` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 296,
                                        columnNumber: 8
                                    }, this),
                                    result.class_probabilities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "1.5rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Class Probabilities:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 299,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "300px",
                                                    marginTop: "1rem"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: createChartData(result.class_probabilities),
                                                    options: getChartOptions()
                                                }, chartKey, false, {
                                                    fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                    lineNumber: 301,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 300,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 298,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "var(--text-muted)",
                                    fontStyle: "italic"
                                },
                                children: 'Upload an image and click "Analyze" to see results here.'
                            }, void 0, false, {
                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                lineNumber: 311,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                        lineNumber: 273,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                lineNumber: 204,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/acm/legion/src/app/analyze/page.js",
        lineNumber: 200,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=acm_legion_src_app_analyze_page_2b2f65cf.js.map