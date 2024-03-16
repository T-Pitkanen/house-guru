"use client";

import { useState, useEffect, useCallback  } from "react";
import throttle from 'lodash/throttle';
import { slide as Menu } from "react-burger-menu";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import style from "./navi.module.css";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "1.25rem",
    height: "1.25rem",
    marginLeft: "21rem",
    marginTop: "1.5rem",
  },
  bmBurgerBars: {
    background: "#4b4b4b",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    marginRight: "1.75rem",
    marginTop: "0.5rem",
  },
  bmCross: {
    background: "#595959",
    width: "0.2rem",
    height: "1.25rem",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#f5f4f3",
    // padding: "0em 0.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#292929",
    paddingTop: "0.5em",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    letterSpacing: "1px",
  },
  bmItem: {
    display: "inline-block",
    marginLeft: "1.75rem",
    marginTop: "1rem",
    paddingBottom: "0.5rem",
    // borderBottom: "1px solid #a0a0a0",
    width: "100%",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
  navHidden: {
    opacity: "0",
    transition: "opacity 0.5s ease-in-out",
  },
  navVisible: {
    opacity: "1",
    transition: "opacity 0.5s ease-in-out",
  }

};

const Logo = () => {
  return (
    <a href="/" className={styles.naviImage}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={100} // Set the desired width
        height={75} // Set the desired height
        style={{ position: "fixed", zIndex: "1000" }}
      />
    </a>
  );
};

const LogoInside = () => {
  return (
    <div>
      {" "}
      <Link href="/" className={styles.insideImage}>
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={100} // Set the desired width
          height={75} // Set the desired height
          style={{ paddingBottom: "1vh" }}
        />
      </Link>
    </div>
  );
};

const MenuBuild = ({ isOpen, onStateChange }) => {
  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={onStateChange}
      styles={styles}
      className={poppins.className}
    >
      <LogoInside />

      <a id="home"className={style.bmItem}  href="/">
        Home
      </a>
      <a id="buy" className={style.bmItem} href="/buy">
        Buy
      </a>
      <a id="sell" className={style.bmItem} href="/sell">
        Sell
      </a>
      <a id="blog" className={style.bmItem} href="/blog">
        Blog
      </a>
      <a id="blog" className={style.bmItem} href="/about">
        About Us
      </a>
      <a id="contact" className={style.bmItem} href="/contact">
        Contact
      </a>
      {/* <div className={style.loginSign}>
        <a id="login" className={`${style.bmItem} ${style.loginItem}`} href="/login">
          Log In
        </a>
        <a id="signup" className={`${style.bmItem} ${style.signItem}`} href="/signup">
          Sign Up
        </a>
      </div> */}
    </Menu>
  );
};

const HamburgerMenu = () => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    isVisible: true,
    windowWidth: undefined,
  });

  const handleMenuToggle = () => {
    setMenuState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const handleResize = useCallback(
    throttle(() => {
      setMenuState((prevState) => ({ ...prevState, windowWidth: window.innerWidth }));
    }, 100),
    []
  );

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setMenuState((prevState) => ({
        ...prevState,
        isVisible: currentScroll < lastScrollTop || currentScroll <= 0,
      }));
      lastScrollTop = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  if (menuState.windowWidth === undefined || menuState.windowWidth >= 490) {
    return null;
  }

  return (
    <div className={menuState.isVisible ? style.navVisible : style.navHidden}>
    <Logo />
    <MenuBuild
      isOpen={menuState.isOpen}
      onStateChange={({ isOpen }) => setMenuState((prevState) => ({ ...prevState, isOpen }))}
    />
  </div>
  );
};

export default HamburgerMenu;
