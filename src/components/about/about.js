import styles from "./about.module.css";
import Link
 from "next/link";
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
          We can offer you professional guidance whether you are a first-time
          buyer, experienced investor, or wanting to sell.
        </p>
        <p>
          With years of expertise, we are known for skill and honesty. Our
          dedicated professionals navigate the local market to fulfill your
          specific needs.
        </p>
        <p>
          We look forward to working with you to fulfill your housing goals. Get
          in touch to begin your successful real estate journey.
        </p>
          <Link href='/about'><button>More of Us</button></Link>  
      </div>
    </div>
  );
};

export default About;
