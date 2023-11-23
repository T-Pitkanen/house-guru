/* "use client";

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

  console.log("Rendering BuyPage");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(properties.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Fetch and filter properties
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]); // New state variable for filtered properties
  const [hasFiltered, setHasFiltered] = useState(false); // New state variable for filter status

  useEffect(() => {
    const type = searchParams.get("type");

    const address = searchParams.get("address");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const size = searchParams.get("size");
    const id = searchParams.get("id");
    console.log("type:", type);

    const fetchData = async () => {
      try {
        const data = await getPropertyData();
        const filtered = data.filter((property) => {
          return (
            (!type || property.type === type) &&
            (!address || property.address === address) &&
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice) &&
            (!size || property.size === size) &&
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

  const handleFilter = (type, address, minPrice, maxPrice, size, id) => {
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type === type) &&
        (!address || property.address === address) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!size || property.size === size) &&
        (!id || property.id === id)
      );
    });
    setFilteredProperties(filtered); // Set filtered properties
    setHasFiltered(true);
  };

  return (
    <div>
    <Filter properties={properties} onFilter={handleFilter} />
    {hasFiltered // Only render filteredProperties if hasFiltered is true
      ? filteredProperties.map((property) => (
          <Property key={property.id} property={property} />
        ))
      : properties.map((property) => ( // Replace properties.map with currentProperties.map
          <Property key={property.id} property={property} />
        ))}
  </div>
  );
};

export default Buy;  */



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
    const size = searchParams.get("size");
    const id = searchParams.get("id");
    console.log("type:", type);

    const fetchData = async () => {
      try {
        const data = await getPropertyData();
        const filtered = data.filter((property) => {
          return (
            (!type || property.type === type) &&
            (!address || property.address === address) &&
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice) &&
            (!size || property.size === size) &&
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

  const handleFilter = (type, address, minPrice, maxPrice, size, id) => {
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type === type) &&
        (!address || property.address === address) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!size || property.size === size) &&
        (!id || property.id === id)
      );
    });
    setFilteredProperties(filtered); // Set filtered properties
    setHasFiltered(true);
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
  </div>
  );
};

export default Buy;