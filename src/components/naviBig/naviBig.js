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

const BigMenu = () => {
	return (
		<div className={styles.menu}>
			<Logo />
			<a id="home" href="/">
				Home
			</a>
			<a id="buy" className="menu-item" href="/buy">
				Buy
			</a>
			<a id="sell" className="menu-item" href="/sell">
				Sell
			</a>
			<a id="blog" className="menu-item" href="/blog">
				Blog
			</a>
			<a id="blog" className="menu-item" href="/about">
				About Us
			</a>
			<a id="contact" className="menu-item" href="/contact">
				Contact
			</a>
		</div>
	);
};

export default BigMenu;
