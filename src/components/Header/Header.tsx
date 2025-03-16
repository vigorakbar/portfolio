import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <a href="#home">Vigor Akbar</a>
        </div>

        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.mobileNavActive : ""
          }`}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about">About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#experience">Experience</a>
            </li>
            <li className={styles.navItem}>
              <a href="#skills">Skills</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
