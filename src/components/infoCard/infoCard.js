import Image from "next/image";
import styles from "./infoCard.module.css";
import Link from "next/link";

const infoData = [
  {
    title: "Get property price estimate",
    content:
      "By inviting our broker to your home, you will get an estimate of the value of your apartment and hear how it should be marketed.",
    button: "Read More",
    image: "/assistance.jpg",
    link: "/sell",
  },
  {
    title: "Our Blog",
    content:
      "Our blog is designed to help you at all stages, whether you're selling a house, purchasing your dream home, or just looking for professional guidance. ",
    button: "Read More",
    image: "/blogs.jpg",
    link: "/blog",
  },
];

const CardBuild = ({ title, content, button, image, link}) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <p>{content}</p>
      <Link href={link}><button>{button}</button></Link>   

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
          link={card.link}
        />
      ))}
    </div>
  );
};

const InfoCardContainer = () => {
    return (
      <div className={styles.infoCardContainer}>
        <InfoCard />
      </div>
    );
  };
  
  export default InfoCardContainer;
