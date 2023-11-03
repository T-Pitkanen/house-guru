"use client";

import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { poppins } from "@/utils/fonts";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "1rem",
    height: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
  },
  bmBurgerBars: {
    background: "#888888",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "1rem",
    width: "1rem",
  },
  bmCross: {
    background: "#595959",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#D8D1C9",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#595959",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    gap: '0.75rem',
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "#FAFAFA",
  },
};

const MenuBuild = ({ isOpen, onStateChange }) => {
  return (
    <Menu
      isOpen={isOpen}
      onStateChange={onStateChange}
      styles={styles}
      className={poppins.className}
    >
      <a id="home" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="services" className="menu-item" href="/services">
        Services
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
