import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./carousel.module.css";

const Slider = () => {
  const images = [
    {
      id: "102",
      address: "Lorem ipsum 5842",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      src: "featuring-1.jpg",
    },
    {
      id: "103",
      address: "Lorem ipsum 5842",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      src: "featuring-2.jpg",
    },
    {
      id: "104",
      address: "Lorem ipsum 5842",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      src: "featuring-3.jpg",
    },
  ];
  return (
    <div className={styles.carouselContainer}>
      <h2>Featuring</h2>
      <Carousel
        className={styles.crsl}
        infiniteLoop
        centerMode
        showStatus={false}
        centerSlidePercentage={100}
        showIndicators={false}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img className={styles.crslImg} src={image.src} alt={image.info} />
            <div className={styles.legend}>
              <h3>{image.address}</h3>
             <hr/>
              <p>{image.info}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
