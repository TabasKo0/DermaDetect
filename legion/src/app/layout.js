
"use client";
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	useEffect(() => {
		// Load theme preference from localStorage
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') {
			setIsDarkMode(true);
			document.documentElement.classList.add('dark-theme');
		}
	}, []);

	const toggleTheme = () => {
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

	return (
		<html lang="en">
			<body className={isDarkMode ? 'dark-theme' : ''}>
				<header className="header">
					<Link href="/" className="logo-link">
						<Image src="/file.svg" alt="Logo" width={40} height={40} style={{ marginRight: '0.5rem' }} />
					</Link>
					<nav className="nav">
						{/* Hamburger button for mobile */}
						<ul className={`nav-list${navOpen ? ' nav-list-open' : ''}`}>
							<li><Link href="/" className="nav-link" onClick={() => setNavOpen(false)}>Home</Link></li>
							<li><Link href="/analyze" className="nav-link" onClick={() => setNavOpen(false)}>Analyze</Link></li>
							<li><Link href="/Project-Details" className="nav-link" onClick={() => setNavOpen(false)}>Project details</Link></li>
							<li><Link href="/documentation" className="nav-link" onClick={() => setNavOpen(false)}>Documentation</Link></li>
						</ul>
						<button onClick={toggleTheme} className="theme-toggle">
							<svg xmlns="http://www.w3.org/2000/svg"
								 viewBox="0 0 64 64"
								 width="20" height="20"
								 role="img" 
								 aria-label="Theme toggle"
								 fill="white" 
								 stroke="white"
								 className="theme-icon">
								{/* core circle */}
								<circle cx="32" cy="32" r="10" />
								{/* 8 rays */}
								<line x1="32" y1="4"  x2="32" y2="14" strokeWidth="4" strokeLinecap="round"/>
								<line x1="32" y1="50" x2="32" y2="60" strokeWidth="4" strokeLinecap="round"/>
								<line x1="4"  y1="32" x2="14" y2="32" strokeWidth="4" strokeLinecap="round"/>
								<line x1="50" y1="32" x2="60" y2="32" strokeWidth="4" strokeLinecap="round"/>
								<line x1="12" y1="12" x2="19" y2="19" strokeWidth="4" strokeLinecap="round"/>
								<line x1="45" y1="45" x2="52" y2="52" strokeWidth="4" strokeLinecap="round"/>
								<line x1="12" y1="52" x2="19" y2="45" strokeWidth="4" strokeLinecap="round"/>
								<line x1="45" y1="19" x2="52" y2="12" strokeWidth="4" strokeLinecap="round"/>
							</svg>
						</button>
					</nav>
				<button
							className="phone-toggle"
							aria-label="Toggle navigation"
							onClick={() => setNavOpen(!navOpen)}
						>
							<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="6" width="28" height="2.5" rx="1.25" fill="currentColor" />
								<rect y="13" width="28" height="2.5" rx="1.25" fill="currentColor" />
								<rect y="20" width="28" height="2.5" rx="1.25" fill="currentColor" />
							</svg>
						</button>	
				</header>
				<nav className={`phone-nav${navOpen ? '' : ' nav-close'}`}>
						{/* Hamburger button for mobile */}

						<ul className={`nav-list${navOpen ? '' : ' nav-close'}`}>
							<li><Link href="/" className="nav-link" onClick={() => setNavOpen(false)}>Home</Link></li>
							<li><Link href="/analyze" className="nav-link" onClick={() => setNavOpen(false)}>Analyze</Link></li>
							<li><Link href="/Project-Details" className="nav-link" onClick={() => setNavOpen(false)}>Project details</Link></li>
							<li><Link href="/documentation" className="nav-link" onClick={() => setNavOpen(false)}>Documentation</Link></li>
						</ul>
						<button onClick={toggleTheme} className="theme-toggle">
							<svg xmlns="http://www.w3.org/2000/svg"
								 viewBox="0 0 64 64"
								 width="20" height="20"
								 role="img" 
								 aria-label="Theme toggle"
								 fill="white" 
								 stroke="white"
								 className="theme-icon">
								{/* core circle */}
								<circle cx="32" cy="32" r="10" />
								{/* 8 rays */}
								<line x1="32" y1="4"  x2="32" y2="14" strokeWidth="4" strokeLinecap="round"/>
								<line x1="32" y1="50" x2="32" y2="60" strokeWidth="4" strokeLinecap="round"/>
								<line x1="4"  y1="32" x2="14" y2="32" strokeWidth="4" strokeLinecap="round"/>
								<line x1="50" y1="32" x2="60" y2="32" strokeWidth="4" strokeLinecap="round"/>
								<line x1="12" y1="12" x2="19" y2="19" strokeWidth="4" strokeLinecap="round"/>
								<line x1="45" y1="45" x2="52" y2="52" strokeWidth="4" strokeLinecap="round"/>
								<line x1="12" y1="52" x2="19" y2="45" strokeWidth="4" strokeLinecap="round"/>
								<line x1="45" y1="19" x2="52" y2="12" strokeWidth="4" strokeLinecap="round"/>
							</svg>
						</button>
					</nav>
				<main className="main">
					{children}
				</main>
				
			</body>
		</html>
	);
}
