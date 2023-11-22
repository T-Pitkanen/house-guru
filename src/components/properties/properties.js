"use client";
import { getPropertyData, getPropertyDataMock } from "@/services/properties.service";
import Property from "../property/property";
import { useState, useEffect } from "react";
import styles from "./properties.module.css";

const Properties = ({recommended}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {

    const getData = async () => {

      const data = await getPropertyDataMock();

      let filteredData = recommended ? data.filter( (post) => property.recommended === true ) : data;

      setProperties(filteredData);

    } 

    getData();


  }, [recommended])

  return (
    <div className={styles.properties}>
      {properties.map((property) => {
        return <Property key={property._id} property={property}></Property>;
      })}
    </div>
  );
};

export default Properties;
