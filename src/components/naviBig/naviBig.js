'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styles from './naviBig.module.css';

const Logo = () => {
	return (
		<a href="/" className={styles.menuLogo}>
			<Image
				src="/logo/logo.png"
				alt="Logo"
				width={100} // Set the desired width
				height={75} // Set the desired height
				style={{ zIndex: '1000' }}
			/>
		</a>
	);
};

const MenuBuild = () => {

	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
	  let previousScrollPosition = window.pageYOffset;
	  const handleScroll = () => {
		const currentScrollPosition = window.pageYOffset;
		const isVisible = previousScrollPosition > currentScrollPosition;
		setIsVisible(isVisible);
		previousScrollPosition = currentScrollPosition;
	  };
  
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	}, []);



	return (
		<div className={styles.menu}>
		  <Logo />
		  <a id="home" className={styles.menuItem} href="/">
			Home
		  </a>
		  <a id="buy" className={styles.menuItem} href="/buy">
			Buy
		  </a>
		  <a id="sell" className={styles.menuItem}  href="/sell">
			Sell
		  </a>
		  <a id="blog" className={styles.menuItem}  href="/blog">
			Blog
		  </a>
		  <a id="blog" className={styles.menuItem}  href="/about">
			About Us
		  </a>
		  <a id="contact" className={styles.menuItem}  href="/contact">
			Contact
		  </a>
		</div>
	  );
};

const BigMenu = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			let st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		};

		window.addEventListener('scroll', handleScroll, false);
		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		};
	}, []);

	return (
		<div className={isVisible ? styles.menuVisible : styles.menuHidden}>
			{windowWidth > 480 && (
				<>
					{/* <Logo /> */}
					<MenuBuild
					/>
				</>
			)}
		</div>
	);
};

export default BigMenu;
