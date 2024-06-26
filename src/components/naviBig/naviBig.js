"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./naviBig.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.menuLogo}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={90}
        height={65}
        style={{ zIndex: "1000" }}
      />
    </a>
  );
};

const useScrollPosition = () => {
  const isClient = typeof window === 'object';
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 1024);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    let previousScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(previousScrollPosition > currentScrollPosition);
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { isVisible, windowWidth };
};


// const useWindowSize = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowWidth;
// };



const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : undefined);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const MenuBuild = () => {
  const { isVisible } = useScrollPosition();
  const menuClass = isVisible ? styles.menuVisible : styles.menuHidden;

  return (
    <div className={`${styles.menu} ${menuClass}`}>
      <div className={styles.menuContainer}>
        <Logo />
        <a id="home" className={styles.menuItem} href="/">
          Home
        </a>
        <a id="buy" className={styles.menuItem} href="/buy">
          Buy
        </a>
        <a id="sell" className={styles.menuItem} href="/sell">
          Sell
        </a>
        <a id="blog" className={styles.menuItem} href="/blog">
          Blog
        </a>
        <a id="blog" className={styles.menuItem} href="/about">
          About Us
        </a>
        <a id="contact" className={styles.menuItem} href="/contact">
          Contact
        </a>
        {/* <a id="login" className={styles.menuItem} href="/login">
          Log In
        </a>
        <a id="signup" className={styles.menuItem} href="/signup">
          Sign Up
        </a> */}
      </div>
    </div>
  );
};

const BigMenu = () => {
  return (
    <div className={styles.menuVisible}>
      <MenuBuild />
    </div>
  );
};

export default BigMenu;
