"use client";

import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "1rem",
    height: "1rem",
    marginLeft: "21rem",
    marginTop: "1.5rem",
  },
  bmBurgerBars: {
    background: "#888888",
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
    background: "#e7e3de",
    padding: "0em 0.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#292929",
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    letterSpacing: "1px",
  },
  bmItem: {
    display: "inline-block",
    marginLeft: "1.75rem",
    marginTop: "1rem",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

const Logo = () => {
  return (
    <a href="/" className={styles.naviImage}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={100} // Set the desired width
        height={75} // Set the desired height
        style={{ position: "fixed" }}
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
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
