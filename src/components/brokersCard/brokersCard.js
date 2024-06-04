import Image from "next/image";
import styles from "./brokersCard.module.css";
import Link from "next/link";

const articleData = [
  {
    title: "Find A Broker",
    content: "Find a real estate agent that suits you.",
    button: "See our realtors",
    image: "/meet-agents.jpg",
  },
];

const CardBuild = ({ title, content, button, image }) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Link href="/about">
      
          <button>{button}</button>
      
      </Link>

      <Image src={image} alt={title} width={300} height={300} />
    </div>
  );
};

const CardBrokers = () => {
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

export default CardBrokers;
