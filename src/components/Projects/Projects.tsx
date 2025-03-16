import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { projects } from "./constants";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.sectionDescription}>
          Check out some of the projects I've worked on
        </p>
      </div>

      <div className={styles.filterContainer}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${
              filter === category ? styles.active : ""
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <div className={styles.projectImage}>
                <img className={styles.image} src={project.image} />
              </div>
              <div className={styles.projectLinks}>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.moreProjects}>
        <a
          href="https://github.com/vigorakbar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreProjectsButton}
        >
          See More on GitHub
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
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;
