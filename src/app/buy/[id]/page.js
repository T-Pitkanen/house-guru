"use client";

import React from "react";
import {
  getPropertyById,
  getPropertiesByTitle,
} from "@/services/properties.service";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import GoBackButton from "@/components/goBack/goBack";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ id }) => {
  const router = useRouter();

  //   const { id } = params;

  //   console.log("id prop in PropertyPage component:", id);

  const [property, setProperties] = useState({});

  useEffect(() => {
    console.log("Fetching data for id:", id);

    getPropertyById(id)
      .then((data) => {
        console.log("data in PropertyPage component:", data);
        if (data) {
          const propertyData = {
            address: data.address,
            description: data.description,
            images: data.images,
            price: data.price,
            square_meters: data.square_meters,
            type: data.type,
            bathrooms: data.bathrooms,
            bedrooms: data.bedrooms,
          };
          setProperties(propertyData);
        } else {
          console.error(`No data returned for id: ${id}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
      });
  }, [id]);

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.crsl}
        infiniteLoop
        centerMode
        showStatus={false}
        centerSlidePercentage={100}
        showIndicators={false}
        showThumbs={false}
      >
        {property.images &&
          property.images.map((image) => (
            <div key={image.id}>
              <img
                className={styles.crslImg}
                src={image.src}
                alt={image.info}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

const PropertyPage = ({ params }) => {
  const router = useRouter();

  const { id } = params;

  console.log("id prop in PropertyPage component:", id);

  const [property, setProperties] = useState({});

  useEffect(() => {
    console.log("Fetching property for id:", id);

    getPropertyById(id)
      .then((data) => {
        console.log("data in PropertyPage component:", data);
        if (data) {
          const propertyData = {
            address: data.address,
            description: data.description,
            image: data.image,
            price: data.price,
            location: data.location,
            square_meters: data.square_meters,
            type: data.type,
            bathrooms: data.bathrooms,
            bedrooms: data.bedrooms,
          };
          setProperties(propertyData);
        } else {
          console.error(`No data returned for id: ${id}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
      });
  }, [id]);

  return (
    <div className={styles.propertyContainer}>
      {property.address ? (
        <div className={styles.propertyWrapper}>
          <div className={styles.headerWrapper}>
            <Slider id={id} />
            <div className={styles.address}>
              {" "}
              <h1>{property.address},</h1>
              <h1>{property.location}</h1>
            </div>
            <div className={styles.descNprice}>
              <div className={styles.description}>{property.description}</div>
              <div className={styles.price}>{property.price} €</div>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {/* <Image
                src={property.image}
                alt={property.address}
                width={300}
                height={300}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <GoBackButton className={styles.goBackButton} />
    </div>
  );
};

export default PropertyPage;
