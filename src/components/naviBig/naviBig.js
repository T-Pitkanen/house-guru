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
				width={90} // Set the desired width
				height={65} // Set the desired height
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

	const menuClass = isVisible ? styles.menuVisible : styles.menuHidden;
	return (
		<div className={`${styles.menu} ${menuClass}`}>
			<div className={styles.menuContainer}>
				<Logo />
				<a id="home" className={styles.menuItem} href="/">
					Home
				</a>
				<a id="buy" className={styles.menuItem} href="/buy">
					Buy
				</a>
				<a id="sell" className={styles.menuItem} href="/sell">
					Sell
				</a>
				<a id="blog" className={styles.menuItem} href="/blog">
					Blog
				</a>
				<a id="blog" className={styles.menuItem} href="/about">
					About Us
				</a>
				<a id="contact" className={styles.menuItem} href="/contact">
					Contact
				</a>
				<a id="login" className={styles.menuItem} href="/login">
					Log In
				</a>
				<a id="signup" className={styles.menuItem} href="/contact">
					Sign Up
				</a>
			</div>
		</div>
	);
};

const BigMenu = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	/*
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
	}, []); */

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={isVisible ? styles.menuVisible : styles.menuHidden}>
			{windowWidth > 480 && (
				<>
					{/* <Logo /> */}
					<MenuBuild />
				</>
			)}
		</div>
	);
};

export default BigMenu;
