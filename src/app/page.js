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
	/*
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1300);

	useEffect(() => {
	  const handleResize = () => {
		setIsLargeScreen(window.innerWidth > 1300);
	  };
  
	   // Check if window is defined to avoid issues with server-side rendering
	   if (typeof window !== 'undefined') {
		setIsLargeScreen(window.innerWidth > 1300);
		window.addEventListener('resize', handleResize);
	  }
  
	  // Clean up the event listener when the component unmounts
	  return () => {
		if (typeof window !== 'undefined') {
		  window.removeEventListener('resize', handleResize);
		}
	  };
	}, []); */

	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
	  const handleResize = () => {
		setIsLargeScreen(window.innerWidth > 1300);
	  };
  
	  // Set initial value
	  handleResize();
  
	  // Add event listener
	  window.addEventListener('resize', handleResize);
  
	  // Clean up event listener on component unmount
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []); 

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
			  {!isLargeScreen && <Slider />}
			  <FeaturingCard />
			<InfoCardContainer />
			<About />
		</div>
	);
}
