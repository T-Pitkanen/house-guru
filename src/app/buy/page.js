"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Properties from "@/components/properties/properties";
import Property from "@/components/property/property";
import Filter from "@/components/filter/filter";
import { getPropertyData } from "@/services/properties.service";

const Buy = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //Loader
  const [isLoading, setIsLoading] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const resetPagination = () => {
    setCurrentPage(1);
  };

  // console.log("Rendering BuyPage");

  // Fetch and filter properties
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]); // New state variable for filtered properties
  const [hasFiltered, setHasFiltered] = useState(false); // New state variable for filter status

  /* ORIGINAL
  useEffect(() => {
    const type = searchParams.get("type");
    const address = searchParams.get("address");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minSize = searchParams.get("minSize");
    const maxSize = searchParams.get("maxSize");
    const location = searchParams.get("location");
    const id = searchParams.get("id");

    // console.log("type:", type, "address:", address, "minPrice:", minPrice, "maxPrice:", maxPrice, "minSize:", minSize, "maxSize:", maxSize, "location:", location, "id:", id);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getPropertyData();
        const filtered = data.filter((property) => {
          return (
            (!type || property.type === type) &&
            (!address || property.address === address) &&
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice) &&
            (!minSize || property.price >= minSize) &&
            (!maxSize || property.price <= maxSize) &&
            (!location || property.location === location) &&
            (!id || property.id === id)
          );
        });
        setProperties(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);  */

  useEffect(() => {
    const type = searchParams.get("type");
    const address = searchParams.get("address");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minSize = searchParams.get("minSize");
    const maxSize = searchParams.get("maxSize");
    const location = searchParams.get("location");
    const id = searchParams.get("id");

    // console.log("type:", type, "address:", address, "minPrice:", minPrice, "maxPrice:", maxPrice, "minSize:", minSize, "maxSize:", maxSize, "location:", location, "id:", id);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const dataPromise = getPropertyData();
        const [data] = await Promise.all([
          dataPromise,
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        const filtered = data.filter((property) => {
          return (
            (!type || property.type === type) &&
            (!address || property.address === address) &&
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice) &&
            (!minSize || property.price >= minSize) &&
            (!maxSize || property.price <= maxSize) &&
            (!location || property.location === location) &&
            (!id || property.id === id)
          );
        });
        setProperties(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleFilter = (
    type,
    address,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    id,
    location
  ) => {
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type === type) &&
        (!address ||
          property.address.toLowerCase().includes(address.toLowerCase())) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!minSize || property.price >= minSize) &&
        (!maxSize || property.price <= maxSize) &&
        (!location ||
          property.location.toLowerCase().includes(location.toLowerCase())) &&
        (!id || property.id === id)
      );
    });
    
    setFilteredProperties(filtered);
    setHasFiltered(true);
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(
    (hasFiltered ? filteredProperties.length : properties.length) / itemsPerPage
  );

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Select only the items for the current page
  const currentItems = hasFiltered
    ? filteredProperties.slice(indexOfFirstItem, indexOfLastItem)
    : properties.slice(indexOfFirstItem, indexOfLastItem);

  /* original without pagination
  return (
    <div>
      <Filter properties={properties} onFilter={handleFilter} />
      {hasFiltered // Only render filteredProperties if hasFiltered is true
        ? filteredProperties.map((property) => (
            <Property key={property.id} property={property} />
          ))
        : properties.map((property) => (
            <Property key={property.id} property={property} />
          ))}
          
    
    </div>
  );*/

  /* with pagination working

  return (
    
    <div>
      
      <Filter properties={properties} onFilter={handleFilter} />
      {currentItems.map((property) => (
        <Property key={property.id} property={property} />
      ))}
      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            style={currentPage === i + 1 ? { backgroundColor: 'gray' } : null}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );

  */

  return (
    <div className={styles.buyPageWrapper}>
      <Filter properties={properties} onFilter={handleFilter} resetPagination={resetPagination} />
      {isLoading ? (
        <Image className = {styles.loader} src="/loader/1488.gif" alt="Loading..." width={50} height={50} />
      ) : (
        <>
          <div className={styles.containerFound}>
            {" "}
            <p className={styles.foundProperties}>
              Found Properties: (
              <span className={styles.numberColor}>
                {hasFiltered ? filteredProperties.length : properties.length}
              </span>
              )
            </p>
          </div>
          <div className={styles.buyProperties}>
            {currentItems.map((property) => (
              <Property key={property.id} property={property} />
            ))}
            </div>
            <div className={styles.pagination}>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                style={
                  currentPage === i + 1 ? {backgroundColor: '#263864'} : null
                }
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Buy;


