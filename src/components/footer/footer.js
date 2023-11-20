import Image from 'next/image';
import styles from './footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Logo = () => {
	return (
		<a href="page.js" className={styles.footerImage}>
			<Image
				src="/logo/logo.png"
				alt="Logo"
				width={100} // Set the desired width
				height={75} // Set the desired height
			/>
		</a>
	);
};

const footerData = {
	sell: [
		{ label: 'Salgsavurdering', link: '' },
		{ label: 'Mit Boligsalg', link: '' },
		{ label: 'Find Mægler', link: '' },
	],
	buy: [
		{ label: 'Boligkøbet', link: '' },
		{ label: 'Køberrådgiving', link: '' },
	],
	rent: [{ label: 'Rent', link: '' }],
	blog: [
		{ label: 'Salgsavurdering', link: '' },
		{ label: 'Boligsælget', link: '' },
		{ label: 'Første Bolig', link: '' },
		{ label: 'Sommerhus', link: '' },
	],
	aboutUs: [
		{ label: 'Contact', link: '' },
		{ label: 'Carrier', link: '' },
		{ label: '', link: '' },
	],
	copy: '©2023 Tiia Pitkänen',
};

const FooterBuild = ({ footerData }) => {
	const { sell, buy, rent, blog, aboutUs, copy } = footerData;

	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerTop}>
					<Logo />
					<div className={styles.icons}>
						<FaInstagram />
						<FaFacebookF />
						<FaLinkedin />
					</div>
				</div>
				<div className={styles.footerBottom}>
					<div className={styles.linksSeparation}>
						{' '}
						<div className={styles.links}>
							<h4>SELL</h4>
							{sell.map((item, index) => (
								<p key={index}>
									<a href={item.link}>{item.label}</a>
								</p>
							))}
						</div>
						<div className={styles.links}>
							<h4>BUY</h4>
							{buy.map((item, index) => (
								<p key={index}>
									<a href={item.link}>{item.label}</a>
								</p>
							))}
						</div>{' '}
						<div className={styles.links}>
							<h4>RENT</h4>
							{rent.map((item, index) => (
								<p key={index}>
									<a href={item.link}>{item.label}</a>
								</p>
							))}
						</div>
					</div>
					<div className={styles.linksSeparation}>
						<div className={styles.links}>
							<h4>ABOUT US</h4>
							{aboutUs.map((item, index) => (
								<p key={index}>
									<a href={item.link}>{item.label}</a>
								</p>
							))}
						</div>
						<div className={styles.links}>
							<h4>BLOG</h4>
							{blog.map((item, index) => (
								<p key={index}>
									<a href={item.link}>{item.label}</a>
								</p>
							))}
						</div>
					</div>
				</div>
				<div className={styles.footerCopy}>{copy}</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return <FooterBuild footerData={footerData} />;
};

export default Footer;
