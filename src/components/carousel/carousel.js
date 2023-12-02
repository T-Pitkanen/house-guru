import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import styles from "./carousel.module.css";

const Slider = () => {
  const images = [
    {
      _id: "102",
      address: "5678 Maple Avenue, Cityville",
      info: "This charming summerhouse in the Cityville offers a beautiful stone yard and a cozy courtyard surrounded by majestic elm trees.",
      src: "summerhouse/exterior.jpg",
      link: "/buy/656b789da4f633cd70cbc837",
    },
    {
      _id: "103",
      address: "4321 Oak Court, Villagetown",
      info: "This modern apartment in Villagetown offers a spacious living room with high ceilings and large windows that provide plenty of natural light.",
      src: "apartment/exterior.jpg",
      link: "/buy/656b7bd1a4f633cd70cbc84c",
    },
    {
      _id: "104",
      address: "13579 Birch Boulevard, Suburbia",
      info: "This spacious house in Suburbia has a large balcony with a fantastic view over the lake.",
      src: "house/exterior.jpg",
      link: "/buy/656b817fa4f633cd70cbc85c",
    },
  ];
  return (
    <div className={styles.carouselContainer}>
      <h2>Featuring</h2>
      <hr className={styles.carouselHr} />
      <Carousel
        className={styles.crsl}
        infiniteLoop
        centerMode
        showStatus={false}
        centerSlidePercentage={100}
        showIndicators={false}
        swipeable={false}
      >
        {images.map((image) => (
          <div key={image._id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.crslImg} src={image.src} alt={image.info} />
            <div className={styles.legend}>
              <h3>{image.address}</h3>
              <hr />
              <p>{image.info}</p>
              <Link href={image.link}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
