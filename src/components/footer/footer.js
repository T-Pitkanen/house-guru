"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Logo = () => {
  return (
    <a href="/" className={styles.footerImage}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={120} // Set the desired width
        height={90} // Set the desired height
      />
    </a>
  );
};

function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return <button className={styles.topButton} onClick={scrollToTop}> <FaArrowUp className={styles.arrowButton} /> Top</button>;
}

const footerData = {
  sell: [
    { label: "Sales Evaluation", link: "/sell" },
    { label: "Find an Agent", link: "/about" },
    { label: "", link: "" },
    { label: "", link: "" },
  ],
  buy: [
    { label: "Buy Properties", link: "/buy" },
    { label: "Buying Guide", link: "/blog/6418576e26d8eda8bbe16728" },
    { label: "", link: "" },
    { label: "", link: "" },
  ],
  blog: [
    { label: "Divorce", link: "/blog/6418576e26d8eda8bbe16729" },
    { label: "Selling", link: "/blog/23423423423" },
    { label: "First House", link: "/blog/6418576e26d8eda8bbe16728" },
    { label: "Summerhouse", link: "/blog/34234234423" },
  ],
  aboutUs: [
    { label: "Contact", link: "/contact" },
    { label: "Our Agents", link: "/about" },
    { label: "", link: "" },
  ],
  copy: "©2023 Tiia Pitkänen",
};

const FooterBuild = ({ footerData }) => {
  const { sell, buy, rent, blog, aboutUs, copy } = footerData;

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <div className={styles.logoNbutton}>
            <Logo />
            <BackToTopButton />
          </div>

          <div className={styles.icons}>
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedin />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.linksSeparation}>
            {" "}
            <div className={styles.links}>
              <h4>SELL</h4>
              {sell.map((item, index) => (
                <p key={index} style={{ height: "20px" }}>
                  <a href={item.link}>{item.label}</a>
                </p>
              ))}
            </div>
            <div className={styles.links}>
              <h4>BUY</h4>
              {buy.map((item, index) => (
                <p key={index} style={{ height: "20px" }}>
                  <a href={item.link}>{item.label}</a>
                </p>
              ))}
            </div>{" "}
          </div>
          <div className={styles.linksSeparation}>
            <div className={styles.links}>
              <h4>BLOG</h4>
              {blog.map((item, index) => (
                <p key={index} style={{ height: "20px" }}>
                  <a href={item.link}>{item.label}</a>
                </p>
              ))}
            </div>
            <div className={styles.links}>
              <h4>ABOUT US</h4>
              {aboutUs.map((item, index) => (
                <p key={index} style={{ height: "20px" }}>
                  <a href={item.link}>{item.label}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footerAddress}>
          <div className={styles.contactInfo}>
            <p>(+45) 12 34 56 </p>
            <p>info@housegururealty.com</p>
            <p>123 Main Street, Cityville, 56789</p>
          </div>
        </div>
        <div className={styles.footerCopy}>{copy}</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <FooterBuild footerData={footerData} />;
};

export default Footer;
