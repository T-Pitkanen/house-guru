import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./carousel.module.css";

const Slider = () => {
  const images = [
    {
      id: "102",
      info: "LOREM IPSUM DALDSAASDL",
      src: "featuring-1.jpg",
    },
    {
      id: "103",
      info: "LOREM IPSUM DALDSAASDL",
      src: "featuring-2.jpg",
    },
    {
      id: "104",
      info: "LOREM IPSUM DALDSAASDL",
      src: "featuring-3.jpg",
    },
  ];
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.crsl}
        infiniteLoop
        centerMode
        showStatus={false}
        centerSlidePercentage={100}
      >
        {images.map((image) => (
          <img className={styles.crslImg} src={image.src} />
          <p className={styles.legend}> Legend </p>
          //FIX THIS
        ))}
       
      </Carousel>
    </div>
  );
};

export default Slider;
