"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Properties from "@/components/properties/properties";
import Property from "@/components/property/property";
import Filter from "@/components/filter/filter";
import { getPropertyData } from "@/services/properties.service";
import Pagination from "@/components/pagination/pagination";

const Buy = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  console.log("Rendering BuyPage");

  // Fetch and filter properties
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]); // New state variable for filtered properties
  const [hasFiltered, setHasFiltered] = useState(false); // New state variable for filter status

  useEffect(() => {

    const type = searchParams.get("type");
    const address = searchParams.get("address");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minSize = searchParams.get("minSize");
    const maxSize = searchParams.get("maxSize");
    const location = searchParams.get("location");
    const id = searchParams.get("id");
    console.log("type:", type, "address:", address, "minPrice:", minPrice, "maxPrice:", maxPrice, "minSize:", minSize, "maxSize:", maxSize, "location:", location, "id:", id);

    const fetchData = async () => {
      try {
        const data = await getPropertyData();
        const filtered = data.filter((property) => {
          return (
            (!type || property.type === type) &&
            (!address || property.address === address) &&
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice) &&
            (!minSize || property.price >= minSize ) &&
            (!maxSize || property.price <= maxSize) &&
            (!location || property.location === location) &&
            (!id || property.id === id)
          );
        });
        setProperties(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleFilter = (type, address, minPrice, maxPrice, minSize,maxSize, id, location) => {
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type === type) &&
        (!address || property.address.toLowerCase().includes(address.toLowerCase())) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!minSize || property.price >= minSize ) &&
        (!maxSize || property.price <= maxSize) &&
        (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
        (!id || property.id === id)
      );
    });
    setFilteredProperties(filtered); // Set filtered properties
    setHasFiltered(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <Pagination
        currentPage={currentPage}
        totalItems={hasFiltered ? filteredProperties.length : properties.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Buy;
