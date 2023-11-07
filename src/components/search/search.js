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
				<div className={styles.middleContainer}>
					<div className={styles.midFirst}>
						<div className={styles.radioWrapper}>
							{' '}
							<input type="radio" id="rent"></input>
							<input type="radio" id="buy" name="buy"></input>{' '}
						</div>
						<div className={styles.idSearch}>
							<input
								type="text"
								id="id"
								name="search with id"
								placeholder="Search with property ID"
							></input>
						</div>
					</div>
					<div className={styles.midSecond}>
						<div className={styles.addressSearch}>
							<input
								type="text"
								id="address"
								name="address"
								placeholder="Type city, postnumber or address"
							></input>
						</div>
						<div className={styles.typeSelect}>
							<select name="types" id="types">
								<option value="" disabled selected>
									Property Type
								</option>
								<option value="house">House</option>
								<option value="apartment">Apartment</option>
								<option value="summerhouse">Summerhouse</option>
							</select>
						</div>
					</div>
					<div className={styles.midThird}>
						<div className={styles.price}>
							<p>Price</p>
							<input
								type="number"
								id="price"
								name="price"
								placeholder="min"
							></input>
							<p>000€ -</p>
							<input
								type="number"
								id="price"
								name="price"
								placeholder="max"
							></input>
							<p>000€</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
