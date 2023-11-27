'use client';

import Search from '@/components/search/search';
import Card from '@/components/articleCard/articleCard';
import styles from './page.module.css';
import Slider from '@/components/carousel/carousel';
import InfoCardContainer from '@/components/infoCard/infoCard';
import About from '@/components/about/about';
import { useEffect } from 'react';

export default function Home() {
	/*
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (!localStorage.getItem('alertShown')) {
				if (window.innerWidth > 1024) {
					alert('Use your fkn PHONE TY!!!!!!');
				} else {
					alert('HOWDY!');
				}
				localStorage.setItem('alertShown', 'true');
			}
		}
	}, []);*/
	return (
		<div className={styles.page}>
			<div className={styles.pageHeader}>
				<h1>Buying, selling or planning?</h1>
				<p>
					We have the best deals for you. Find your dream home, or sell your
					house with us.
				</p>
			</div>

			<Search />
			<Card />
			<Slider />
			<InfoCardContainer />
			<About />
		</div>
	);
}
