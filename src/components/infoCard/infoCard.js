import Image from "next/image";
import styles from "./infoCard.module.css";

const infoData = [
  {
    title: "Get property price estimate and much more!",
    content:
      "By inviting our broker to your home, you will get an estimate of the value of your apartment and hear how it should be marketed.",
    button: "Read More",
    image: "/assistance.jpg",
  },
  {
    title: "Our Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    button: "Read More",
    image: "/blogs.jpg",
  },
];

const CardBuild = ({ title, content, button, image }) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{button}</button>

      <Image src={image} alt={title} width={300} height={300} />
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className={styles.cardWrapper}>
      {infoData.map((card, index) => (
        <CardBuild
          key={index}
          title={card.title}
          content={card.content}
          button={card.button}
          image={card.image}
        />
      ))}
    </div>
  );
};

const InfoCardContainer = () => {
    return (
      <div className={styles.infoCardContainer}>
        <h3>Mauris ultrices eros in cursus turpis massa</h3>
        <InfoCard />
      </div>
    );
  };
  
  export default InfoCardContainer;
