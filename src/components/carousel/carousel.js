import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./carousel.module.css";

const Slider = () => {
  const images = [
    {
      id: "102",
      address: "Elmehaven 6A, 9012 Fuglesangkvarteret",
      info: "This charming townhouse in the Fuglesangkvarteret offers a beautiful stone yard and a cozy courtyard surrounded by majestic elm trees.",
      src: "featuring-1.jpg",
    },
    {
      id: "103",
      address: "Morgenstjernevej 8, 7890 Højbjerg",
      info: "This modern town house in Højbjerg offers a spacious living room with high ceilings and large windows that provide plenty of natural light.",
      src: "featuring-2.jpg",
    },
    {
      id: "104",
      address: "Birkelunden 33, 2345 Søsiden",
      info: "This spacious apartment in Søsiden has a large balcony with a fantastic view over the lake.",
      src: "featuring-3.jpg",
    },
  ];
  return (
    <div className={styles.carouselContainer}>
      <h2>Featuring</h2>
      <hr className={styles.carouselHr}/>
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
          <div key={image.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
