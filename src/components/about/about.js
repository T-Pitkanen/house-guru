import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <h2>ABOUT US</h2>
        <p>
          Our objective is to offer a knowledgeable and professional real estate
          experience, understanding that competence and dedication are crucial.
        </p>
        <p>
          We can offer you professional guidance whether you're a first-time
          buyer, experienced investor, or wanting to sell.
        </p>
        <p>
          With years of expertise, we're known for skill and honesty. Our
          dedicated professionals navigate the local market to fulfill your
          specific needs.
        </p>
        <p>
          We look forward to working with you to fulfill your housing goals. Get
          in touch to begin your successful real estate journey.
        </p>
        <button>More of Us</button>
      </div>
    </div>
  );
};

export default About;
