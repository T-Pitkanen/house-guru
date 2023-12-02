"use client";

import Image from "next/image";
import styles from "./featuring.module.css";
import Link from "next/link";

const FeaturingCard = () => {
  const images = [
    {
      id: "102",
      address: "5678 Maple Avenue, Cityville",
      info: "This charming summerhouse in the Cityville offers a beautiful stone yard and a cozy courtyard surrounded by majestic elm trees.",
      src: "summerhouse/exterior.jpg",
      link: "/buy/656b789da4f633cd70cbc837",
    },
    {
      id: "103",
      address: "4321 Oak Court, Villagetown",
      info: "This modern apartment in Villagetown offers a spacious living room with high ceilings and large windows that provide plenty of natural light.",
      src: "apartment/exterior.jpg",
      link: "/buy/656b7bd1a4f633cd70cbc84c",
    },
    {
      id: "104",
      address: "13579 Birch Boulevard, Suburbia",
      info: "This spacious house in Suburbia has a large balcony with a fantastic view over the lake.",
      src: "house/exterior.jpg",
      link: "/buy/656b817fa4f633cd70cbc85c",
    },
  ];

  return (
    <div className={styles.featuringContainer}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>Featuring</h2>
        <hr className={styles.featuringHr} />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.featuringCard}>
          {images.map((image) => (
            <div className={styles.card} key={image.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.cardImg}
                src={image.src}
                alt={image.info}
              />
              <div className={styles.description}>
                <h3>{image.address}</h3>
                <hr />
                <p>{image.info}</p>
                <Link href={image.link}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturingCard;
