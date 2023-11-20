'use client';

import styles from './search.module.css';
import background from '../../../public/background.jpg';
import { FaSearch } from 'react-icons/fa';

const SearchBuild = () => {
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
							<div className={styles.radio}>
								{' '}
								<input type="radio" id="rent" name="rent" value="rent"></input>
								<label for="rent">Rent</label>
							</div>
							<div className={styles.radio}>
								{' '}
								<input type="radio" id="buy" name="buy"></input>
								<label for="buy">Buy</label>{' '}
							</div>
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
						<div>
							{' '}
							<p>Price</p>
							<div className={styles.price}>
								<input
									type="number"
									id="price"
									name="price"
									placeholder="min"
								></input>
								<p>000€</p>
								<p>-</p>
								<input
									type="number"
									id="price"
									name="price"
									placeholder="max"
								></input>
								<p>000€</p>
							</div>
						</div>
						<div>
							{' '}
							<p>Square Meters</p>
							<div className={styles.size}>
								<input
									type="number"
									id="min"
									name="min"
									placeholder="min"
								></input>
								<p>-</p>
								<input
									type="number"
									id="max"
									name="max"
									placeholder="max"
								></input>
								<p>m²</p>
							</div>
						</div>
					</div>
				</div>
				<button className={styles.searchProperties}>
					{' '}
					<FaSearch className={styles.searchIcon} />
					Search
				</button>
			</div>
		</div>
	);
};

const Background = () => {
	return (
		<div className={styles.backgroundImage}>
			<img src="background.jpg" alt="Background" />
		</div>
	);
};

const Search = () => {
	return (
		<>
			<Background />
			<SearchBuild />
		</>
	);
};

export default Search;
