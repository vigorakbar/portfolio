// components/Footer/Footer.tsx

import React from "react";
import styles from "./Footer.module.scss";
import { GithubIcon } from "../Icon/GithubIcon";
import { LinkedInIcon } from "../Icon/LinkedInIcon";
import { InstagramIcon } from "../Icon/InstagramIcon";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h3>Vigor Akbar</h3>
            <p>Frontend Engineer</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerLinkColumn}>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinkColumn}>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/vigorakbar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className={styles.footerIcon} />
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/vigorakbar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className={styles.footerIcon} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/vigorakbar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className={styles.footerIcon} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:vigorakbar@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.footerIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Vigor Akbar. All rights reserved.
          </p>
          <p className={styles.attribution}>
            Designed & Built with <span className={styles.heart}>❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
