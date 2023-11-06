'use client';

import { poppins } from '@/utils/fonts';
import styles from './search.module.css';

const Background = () => {
	return (
		<Image
			src="background.jpg"
			alt="Logo"
			width={100} // Set the desired width
			height={75} // Set the desired height
			style={{ position: 'fixed' }}
		/>
	);
};

const Search = () => {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchWrapper}>
				<div className={styles.buttonWrapper}>
					<button className={styles.searchButton}>Search Properties</button>
					<button className={styles.searchButton}>Search Brokers</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
