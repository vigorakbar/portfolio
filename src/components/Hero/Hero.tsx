import React from "react";
import styles from "./Hero.module.scss";
import { GithubIcon } from "../Icon/GithubIcon";
import { LinkedInIcon } from "../Icon/LinkedInIcon";
import { InstagramIcon } from "../Icon/InstagramIcon";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>👋 Hello, I'm</p>
          <h1 className={styles.name}>Vigor Akbar</h1>
          <h2 className={styles.title}>Frontend Engineer</h2>
          <p className={styles.description}>
            I build exceptional digital experiences with modern technologies
          </p>
          <div className={styles.ctaButtons}>
            <a href="#experience" className={styles.primaryButton}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          {/* TODO: instead of photo use some cool 3d stuff later :p 
          <div className={styles.heroImage}>
            <div className={styles.profilePlaceholder}>YN</div>
          </div> */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/vigorakbar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon width={24} height={24} />
            </a>
            <a
              href="https://linkedin.com/in/vigorakbar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon width={24} height={24} />
            </a>
            <a
              href="https://instagram.com/vigorakbar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <div
        className={styles.scrollDown}
        onClick={() => (location.href = "#about")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
