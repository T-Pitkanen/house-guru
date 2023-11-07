import Image from "next/image";
import styles from "./articleCard.module.css";
import { playfair } from "@/utils/fonts";

const articleData = [
  {
    title: "Selling",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    button: "Read More",
    image: "/selling.jpg",
  },
  {
    title: "Buying",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    button: "Read More",
    image: "/buying.jpg",
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

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      {articleData.map((card, index) => (
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

export default Card;
