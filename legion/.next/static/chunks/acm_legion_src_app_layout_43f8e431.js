(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/acm/legion/src/app/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acm/legion/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RootLayout(param) {
    let { children } = param;
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            // Load theme preference from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark-theme');
            }
        }
    }["RootLayout.useEffect"], []);
    const toggleTheme = ()=>{
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: isDarkMode ? 'dark-theme' : '',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "logo-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/file.svg",
                                alt: "Logo",
                                width: 40,
                                height: 40,
                                style: {
                                    marginRight: '0.5rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/acm/legion/src/app/layout.js",
                                lineNumber: 39,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/acm/legion/src/app/layout.js",
                            lineNumber: 38,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "nav-list".concat(navOpen ? ' nav-list-open' : ''),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "nav-link",
                                                onClick: ()=>setNavOpen(false),
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 44,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/layout.js",
                                            lineNumber: 44,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/analyze",
                                                className: "nav-link",
                                                onClick: ()=>setNavOpen(false),
                                                children: "Analyze"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 45,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/layout.js",
                                            lineNumber: 45,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/Project-Details",
                                                className: "nav-link",
                                                onClick: ()=>setNavOpen(false),
                                                children: "Project details"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 46,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/layout.js",
                                            lineNumber: 46,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/documentation",
                                                className: "nav-link",
                                                onClick: ()=>setNavOpen(false),
                                                children: "Documentation"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 47,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/acm/legion/src/app/layout.js",
                                            lineNumber: 47,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 43,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "theme-toggle",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 64 64",
                                        width: "20",
                                        height: "20",
                                        role: "img",
                                        "aria-label": "Theme toggle",
                                        fill: "white",
                                        stroke: "white",
                                        className: "theme-icon",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "32",
                                                cy: "32",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 59,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "32",
                                                y1: "4",
                                                x2: "32",
                                                y2: "14",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 61,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "32",
                                                y1: "50",
                                                x2: "32",
                                                y2: "60",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 62,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "4",
                                                y1: "32",
                                                x2: "14",
                                                y2: "32",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 63,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "50",
                                                y1: "32",
                                                x2: "60",
                                                y2: "32",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 64,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "12",
                                                x2: "19",
                                                y2: "19",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 65,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "45",
                                                y1: "45",
                                                x2: "52",
                                                y2: "52",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 66,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "52",
                                                x2: "19",
                                                y2: "45",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 67,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "45",
                                                y1: "19",
                                                x2: "52",
                                                y2: "12",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/acm/legion/src/app/layout.js",
                                                lineNumber: 68,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 50,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 49,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acm/legion/src/app/layout.js",
                            lineNumber: 41,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "phone-toggle",
                            "aria-label": "Toggle navigation",
                            onClick: ()=>setNavOpen(!navOpen),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "28",
                                height: "28",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        y: "6",
                                        width: "28",
                                        height: "2.5",
                                        rx: "1.25",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 78,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        y: "13",
                                        width: "28",
                                        height: "2.5",
                                        rx: "1.25",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 79,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        y: "20",
                                        width: "28",
                                        height: "2.5",
                                        rx: "1.25",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 80,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/acm/legion/src/app/layout.js",
                                lineNumber: 77,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/acm/legion/src/app/layout.js",
                            lineNumber: 72,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/acm/legion/src/app/layout.js",
                    lineNumber: 37,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "phone-nav".concat(navOpen ? '' : ' nav-close'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav-list".concat(navOpen ? '' : ' nav-close'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "nav-link",
                                        onClick: ()=>setNavOpen(false),
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 88,
                                        columnNumber: 12
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 88,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/analyze",
                                        className: "nav-link",
                                        onClick: ()=>setNavOpen(false),
                                        children: "Analyze"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 89,
                                        columnNumber: 12
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 89,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/Project-Details",
                                        className: "nav-link",
                                        onClick: ()=>setNavOpen(false),
                                        children: "Project details"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 90,
                                        columnNumber: 12
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 90,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/documentation",
                                        className: "nav-link",
                                        onClick: ()=>setNavOpen(false),
                                        children: "Documentation"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 91,
                                        columnNumber: 12
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/acm/legion/src/app/layout.js",
                                    lineNumber: 91,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acm/legion/src/app/layout.js",
                            lineNumber: 87,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleTheme,
                            className: "theme-toggle",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 64 64",
                                width: "20",
                                height: "20",
                                role: "img",
                                "aria-label": "Theme toggle",
                                fill: "white",
                                stroke: "white",
                                className: "theme-icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "32",
                                        cy: "32",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 103,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "32",
                                        y1: "4",
                                        x2: "32",
                                        y2: "14",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 105,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "32",
                                        y1: "50",
                                        x2: "32",
                                        y2: "60",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 106,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        y1: "32",
                                        x2: "14",
                                        y2: "32",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 107,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "50",
                                        y1: "32",
                                        x2: "60",
                                        y2: "32",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 108,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "12",
                                        x2: "19",
                                        y2: "19",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 109,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "45",
                                        y1: "45",
                                        x2: "52",
                                        y2: "52",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 110,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "52",
                                        x2: "19",
                                        y2: "45",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 111,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "45",
                                        y1: "19",
                                        x2: "52",
                                        y2: "12",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/acm/legion/src/app/layout.js",
                                        lineNumber: 112,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/acm/legion/src/app/layout.js",
                                lineNumber: 94,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/acm/legion/src/app/layout.js",
                            lineNumber: 93,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/acm/legion/src/app/layout.js",
                    lineNumber: 84,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acm$2f$legion$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/acm/legion/src/app/layout.js",
                    lineNumber: 116,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/acm/legion/src/app/layout.js",
            lineNumber: 36,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/acm/legion/src/app/layout.js",
        lineNumber: 35,
        columnNumber: 3
    }, this);
}
_s(RootLayout, "J1Nr2ZMWTfhCBnkjsHYPqlQxtfE=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=acm_legion_src_app_layout_43f8e431.js.map