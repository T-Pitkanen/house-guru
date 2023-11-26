import React, { useState, useEffect } from "react";
import { useAppRouter } from 'next/navigation';
// import Image from "next/image";
import styles from "./buy.module.css";
import Properties from "@/components/properties/properties";
import Property from "@/components/property/property";
import Filter from "@/components/filter/filter";
import { getPropertyData } from "@/services/properties.service";

const Buy = () => {
  console.log("Rendering BuyPage");

  const router = useAppRouter();

  // Fetch and filter properties
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined" || !router.isReady) return;

    const { type } = router.query || {};

    const fetchData = async () => {
      try {
        const data = await getPropertyData();
        console.log("Fetched data:", data);
        const filtered = data.filter((property) => property.type === type);
        console.log("Filtered data:", filtered);
        setProperties(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div>
      {properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Buy;