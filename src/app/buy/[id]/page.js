"use client";

import React from "react";
import {
  getPropertyById,
  getPropertiesByTitle,
} from "@/services/properties.service";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import GoBackButton from "@/components/goBack/goBack";
import Accordion from "@/components/accordion/accordion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ _id }) => {
  const router = useRouter();

  //   const { id } = params;

  //   console.log("id prop in PropertyPage component:", id);

  const [property, setProperties] = useState({});
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    console.log("Fetching data for id:", _id);

    getPropertyById(_id)
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
            _id: data._id,
          };
          setProperties(propertyData);
        } else {
          console.error(`No data returned for id: ${id}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
      });
  }, [_id]);

  

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.crsl}
        infiniteLoop
        centerMode
        showStatus={false}
        centerSlidePercentage={100}
        showIndicators={false}
        showThumbs={isLargeScreen}
      >
        {property.images &&
          property.images.map((image) => (
            <div key={image._id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.crslImg}
                src={image.src}
                alt={image.info}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

const PropertyPage = ({ params }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { _id } = params;
  const lastScrollTop = useRef(0);

  console.log("id prop in PropertyPage component:", _id);

  const [property, setProperties] = useState({});

  useEffect(() => {
    console.log("Fetching property for id:", _id);

    getPropertyById(_id)
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
            info: data.info,
            _id: data._id,
          };
          setProperties(propertyData);
        } else {
          console.error(`No data returned for id: ${_id}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
      });
  }, [_id]);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <>
      <div className={isVisible ? styles.infoVisible : styles.infoHidden}>
        <p>
          {property.address}, {property.location}
        </p>
        <p className={styles.infoPrice}>{property.price}€</p>
        {/* Rest of your component */}
      </div>

      <div className={styles.propertyContainer}>
        {property.address ? (
          <div className={styles.propertyWrapper}>
            <div className={styles.headerWrapper}>
              <Slider id={_id} />
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
                {property.info &&
                  property.info.map((paragraph, id) => (
                    <p key={id}>{paragraph}</p>
                  ))}
              </div>
            </div>
            <div className={styles.contactProperty}>
              <div className={styles.contactPropertyDetails}>
                <h2>Interested?</h2>
                <p>(+45) 12 34 56 </p>
                <p>contact@houseguru.com</p> <p>OR</p>
              </div>
              <form>
                <input type="text" name="name" placeholder="Name:" />
                <input type="tel" name="phone" placeholder="Phone:" />
                <input type="email" name="email" placeholder="Email:" />
                <textarea name="message" placeholder="Message..."></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className={styles.accordion}>
              <Accordion title="Property information">
                <div className={styles.accChildren}>
                  <p className={styles.accTitle}>Address</p> <p> {property.address} </p>
                </div>
                <div className={styles.accChildren}>
                  <p className={styles.accTitle}>Location </p> <p> {property.location} </p>
                </div>
                <div className={styles.accChildren}>
                  <p className={styles.accTitle}>Size </p> <p> {property.square_meters} m² </p>
                </div>
              </Accordion>
              <Accordion title="Plot">
                <p>Content for Plot</p>
              </Accordion>
              <Accordion title="Equipment">
                <p>Content for Equipment</p>
              </Accordion>
              <Accordion title="Price and housing costs">
                <p>Content for Costs</p>
              </Accordion>
            </div>
            <GoBackButton className={styles.goBackButton} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PropertyPage;
