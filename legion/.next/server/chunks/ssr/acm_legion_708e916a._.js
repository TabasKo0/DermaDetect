module.exports = [
"[project]/acm/legion/src/app/analyze/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function DetectPage() {
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
        style: {
            maxWidth: "100vw",
            minHeight: "70vh",
            padding: "2rem",
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
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
                lineNumber: 105,
                columnNumber: 7
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
                                        border: imagePreview ? "none" : dragActive ? "2px solid #1976d2" : "2px dashed #aaa",
                                        borderRadius: 8,
                                        padding: imagePreview ? "0" : "2rem",
                                        textAlign: "center",
                                        background: imagePreview ? "transparent" : dragActive ? "#e3f2fd" : "#f8f9fa",
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
                                        imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imagePreview,
                                            alt: "Selected",
                                            style: {
                                                maxWidth: "100%",
                                                maxHeight: "300px",
                                                objectFit: "contain",
                                                borderRadius: 8
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#333",
                                                fontWeight: "500"
                                            },
                                            children: "Drag & drop an image here, or click to select"
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                            lineNumber: 142,
                                            columnNumber: 33
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
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !image,
                                    style: {
                                        marginLeft: "1rem"
                                    },
                                    children: loading ? "Analyzing..." : "Analyze"
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acm/legion/src/app/analyze/page.js",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                        lineNumber: 107,
                        columnNumber: 7
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
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f8f9fa",
                            padding: "1rem",
                            borderRadius: 6,
                            minWidth: "36vw"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Result"
                            }, void 0, false, {
                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                lineNumber: 159,
                                columnNumber: 8
                            }, this),
                            result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    classInfo[result.prediction] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            margin: "1rem",
                                            padding: "1rem",
                                            background: "#e8f5e8",
                                            borderRadius: 4,
                                            border: "1px solid #4caf50"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Full Name:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    classInfo[result.prediction].fullName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 165,
                                                columnNumber: 12
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
                                                        lineNumber: 166,
                                                        columnNumber: 49
                                                    }, this),
                                                    " ",
                                                    classInfo[result.prediction].description
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 166,
                                                columnNumber: 12
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 164,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Prediction:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            result.prediction
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 168,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Class Index:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            result.class_idx
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 169,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Confidence:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            result.confidence !== undefined ? `${(parseFloat(result.confidence) * 100).toFixed(2)}%` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 170,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "1rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Class Probabilities:"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 172,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: result.class_probabilities && Object.entries(result.class_probabilities).map(([cls, prob])=>{
                                                    let percent = 0;
                                                    if (typeof prob === 'string' || typeof prob === 'number') {
                                                        percent = parseFloat(prob) * 100;
                                                    }
                                                    // Always show 2 decimals, do not round up to 100%
                                                    const display = `${percent.toFixed(2)}%`;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            cls,
                                                            ": ",
                                                            display
                                                        ]
                                                    }, cls, true, {
                                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                        lineNumber: 181,
                                                        columnNumber: 18
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                                lineNumber: 173,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                        lineNumber: 171,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "#666",
                                    fontStyle: "italic"
                                },
                                children: 'Upload an image and click "Analyze" to see results here.'
                            }, void 0, false, {
                                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                                lineNumber: 187,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/acm/legion/src/app/analyze/page.js",
                        lineNumber: 158,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/acm/legion/src/app/analyze/page.js",
                lineNumber: 106,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/acm/legion/src/app/analyze/page.js",
        lineNumber: 104,
        columnNumber: 6
    }, this);
}
}),
"[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/acm/legion/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=acm_legion_708e916a._.js.map