'use client';
import { useState, useEffect } from 'react';
import Search from '@/components/search/search';
import Card from '@/components/articleCard/articleCard';
import styles from './page.module.css';
import Slider from '@/components/carousel/carousel';
import InfoCardContainer from '@/components/infoCard/infoCard';
import About from '@/components/about/about';
import FeaturingCard from '@/components/featuring/featuring';

export default function Home() {


	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
	  const handleResize = () => {
		setIsLargeScreen(window.innerWidth > 1300);
	  };
  
	
	  handleResize();
  
	 
	  window.addEventListener('resize', handleResize);
  
	
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []); 

	return (
		<div className={styles.page}>
			<div className={styles.pageHeader}>
				<h1>Buying, selling or planning?</h1>
				<p>
					We have the best deals for you. <br/> Find your dream home, or sell your
					house with us.
				</p>
			</div>

			<Search />
			<Card />
			  {!isLargeScreen && <Slider />}
			  <FeaturingCard />
			<InfoCardContainer />
			<About />
		</div>
	);
}
