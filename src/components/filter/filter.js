'use client';

import React, { useState, useEffect } from 'react';
import { getPropertyData } from '@/services/properties.service';
import { FaSearch } from 'react-icons/fa';
import styles from './filter.module.css';
import { useRouter } from 'next/navigation';

const FilterBuild = () => {
	const router = useRouter();
	const [properties, setProperties] = useState([]);
	const [filteredProperties, setFilteredProperties] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [id, setId] = useState('');
	const [address, setAddress] = useState('');
	const [type, setType] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [minSize, setMinSize] = useState('');
	const [maxSize, setMaxSize] = useState('');
	const [location, setLocation] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const data = await getPropertyData();
			setProperties(data);
			setFilteredProperties(data);
			setIsLoading(false);
		};

		fetchData();
	}, []);

	const resetFilter = () => {
		setId('');
		setAddress('');
		setType('');
		setMinPrice('');
		setMaxPrice('');
		setMinSize('');
		setMaxSize('');
		setLocation('');

		router.push('/buy');
	};

	const handleFilter = () => {
		console.log('Filtering properties with type:', type);
		setIsLoading(true);

		const filtered = properties.filter(
			(property) =>
				(id ? property.id === id : true) &&
				(address ? property.address.includes(address) : true) &&
				(type ? property.type === type : true) &&
				(minPrice ? property.price >= minPrice : true) &&
				(maxPrice ? property.price <= maxPrice : true) &&
				(minSize ? property.square_meters >= minSize : true) &&
				(maxSize ? property.square_meters <= maxSize : true) &&
				(location ? property.location.includes(location) : true)
		);

		setTimeout(() => {
			console.log('Type before creating URL:', type);
			console.log('Filtered properties:', filtered);

			setFilteredProperties(filtered);

		

			setIsLoading(false);

			// console.log("location:", location);

			const params = new URLSearchParams({
				id,
				location,
				address,
				type,
				minPrice,
				maxPrice,
				minSize,
				maxSize,
			}).toString();
			router.push(`/buy?${params}`);
		}, 1000);
	};

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className={styles.filterContainer}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleFilter();
				}}
				className={styles.filterWrapper}
			>
				<div className={styles.middleContainer}>
					<div className={styles.selectWrapper}>
						<select value={type} onChange={(e) => setType(e.target.value)}>
							<option value="">House type</option>
							<option value="Summerhouse">Summerhouse</option>
							<option value="Apartment">Apartment</option>
							<option value="House">House</option>
						</select>
					</div>
					<div className={styles.midFirst}>
						<div className={styles.idSearch}>
							<input
								value={id}
								type="text"
								id="id"
								name="search with id"
								placeholder="Search with ID"
								onChange={(event) => setId(event.target.value)}
							></input>
						</div>
					</div>
					<div className={styles.midSecond}>
						<div className={styles.addressSearch}>
							<input
								value={address}
								type="text"
								id="address"
								name="address"
								placeholder="Search with address"
								onChange={(event) =>
									setAddress(capitalizeFirstLetter(event.target.value))
								}
							></input>
						</div>
						<div className={styles.locationSearch}>
							<input
								value={location}
								type="text"
								id="location"
								name="location"
								placeholder="Search with location"
								onChange={(event) =>
									setLocation(capitalizeFirstLetter(event.target.value))
								}
							></input>
						</div>
					</div>
					<div className={styles.midThird}>
						<div className={styles.priceContainer}>
							{' '}
							<p>Price</p>
							<div className={styles.price}>
								<input
									value={minPrice}
									type="number"
									id="price"
									name="price"
									placeholder="min"
									onChange={(event) => setMinPrice(event.target.value)}
								></input>
								<p>-</p>
								<input
									value={maxPrice}
									type="number"
									id="price"
									name="price"
									placeholder="max"
									onChange={(event) => setMaxPrice(event.target.value)}
								></input>
								<p>€</p>
							</div>
						</div>
						<div className={styles.sizeContainer}>
							{' '}
							<p>Size</p>
							<div className={styles.size}>
								<input
									value={minSize}
									type="number"
									id="min"
									name="min"
									placeholder="min"
									onChange={(event) => setMinSize(event.target.value)}
								></input>
								<p>-</p>
								<input
									value={maxSize}
									type="number"
									id="max"
									name="max"
									placeholder="max"
									onChange={(event) => setMaxSize(event.target.value)}
								></input>
								<p>m²</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					{' '}
					<button
						type="submit"
						className={styles.searchProperties}
						onClick={handleFilter}
					>
						<FaSearch className={styles.searchIcon} />
						Search
					</button>
					<button className={styles.resetProperties} onClick={resetFilter}>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};

const Filter = ({ properties, onFilter, resetPagination }) => {
	useEffect(() => {
		resetPagination();
	  }, [resetPagination]);

	return (
		<>
			<FilterBuild />
		</>
	);
};

export default Filter;
