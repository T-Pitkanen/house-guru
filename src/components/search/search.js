"use client";

import React, { useState, useEffect } from "react";
import { getPropertyData } from "@/services/properties.service";
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";
import { useRouter } from "next/navigation";

const SearchBuild = () => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");
  const [location, setLocation] = useState("");

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

  const handleFilter = () => {
    
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
      setFilteredProperties(filtered);
      setIsLoading(false);
      console.log("Type before creating URL:", type);
      const params = new URLSearchParams({
        id,
        address,
        type,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        location
      }).toString();
      router.push(`/buy?${params}`);
    }, 1000);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.buttonWrapper}>
          <button className={styles.searchButton}>Search Properties</button>
          <button className={styles.searchButton}>Search Brokers</button>
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.midFirst}>
            <div className={styles.idSearch}>
              <input
                value={id}
                type="text"
                id="id"
                name="search with id"
                placeholder="Search with property ID"
				onChange={event => setId(event.target.value)}
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
                placeholder="Type address"
                onChange={(event) => setAddress(capitalizeFirstLetter(event.target.value))}
              ></input>
            </div>
            <div className={styles.locationSearch}>
              <input
                value={location}
                type="text"
                id="location"
                name="location"
                placeholder="Type location"
                onChange={(event) => setLocation(capitalizeFirstLetter(event.target.value))}
              ></input>
            </div>
            <div className={styles.typeSelect}>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select a type</option>
                <option value="Summerhouse">Summerhouse</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
            </div>
          </div>
          <div className={styles.midThird}>
            <div>
              {" "}
              <p>Price</p>
              <div className={styles.price}>
                <input
                  value={minPrice}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="min"
				  onChange={event => setMinPrice(event.target.value)}
                ></input>
                <p>000€</p>
                <p>-</p>
                <input
                  value={maxPrice}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="max"
				  onChange={event => setMaxPrice(event.target.value)}
                ></input>
                <p>000€</p>
              </div>
            </div>
            <div>
              {" "}
              <p>Square Meters</p>
              <div className={styles.size}>
                <input
                  value={minSize}
                  type="number"
                  id="min"
                  name="min"
                  placeholder="min"
				  onChange={event => setMinSize(event.target.value)}
                ></input>
                <p>-</p>
                <input
                  value={maxSize}
                  type="number"
                  id="max"
                  name="max"
                  placeholder="max"
				  onChange={event => setMaxSize(event.target.value)}
                ></input>
                <p>m²</p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.searchProperties} onClick={handleFilter}>
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
