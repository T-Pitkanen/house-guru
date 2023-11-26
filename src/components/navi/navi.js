"use client";

import { useState, useEffect } from "react";
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
    borderBottom: "1px solid #858585",
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

      <a id="home" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/buy">
        Buy
      </a>
      <a id="about" className="menu-item" href="/about">
        Sell
      </a>
      <a id="services" className="menu-item" href="/blog">
        Blog
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

const HamburgerMenu = () => {

  

  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
  
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };
  
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <div className={isVisible ? style.navVisible : style.navHidden}>
      <Logo />
      {windowWidth < 420 && (
        <MenuBuild
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
