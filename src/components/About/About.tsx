import React from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.aboutContent}>
        {/* TODO: consider using image?
         <div className={styles.aboutImage}>
          <div className={styles.imagePlaceholder}>
            <span>Photo</span>
          </div>
        </div> */}
        <div className={styles.aboutText}>
          <h3 className={styles.aboutGreeting}>Nice to meet you!</h3>
          <p className={styles.aboutDescription}>
            I'm a passionate Frontend Engineer with a strong focus on creating
            responsive, scalable, and performant web applications. With 5 years
            of experience in the industry, I've developed expertise in React,
            TypeScript, and modern frontend ecosystem.
          </p>
          <p className={styles.aboutDescription}>
            My journey in web development started when I did an internship on
            the 3rd year of my college. Since then, I've worked with various
            companies to deliver high-quality frontend solutions that provide
            exceptional user experiences.
          </p>
          <div className={styles.personalInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Name:</span>
              <span className={styles.infoValue}>Vigor Akbar</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <span className={styles.infoValue}>vigorakbar@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location:</span>
              <span className={styles.infoValue}>Singapore</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Availability:</span>
              <span className={styles.infoValue}>Open to opportunities</span>
            </div>
          </div>
          <a
            href="/CV-Vigor_Akbar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
