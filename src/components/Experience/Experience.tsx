import styles from "./Experience.module.scss";

export const Experience = () => {
  const experiences = [
    {
      company: "Shopee",
      companyHomepage: "https://www.shopee.sg/",
      title: "Frontend Engineer",
      time: "Sep 2021 - Present",
      desc: "Maintained a Page Builder system to create highly customized web pages used by Shopee campaign pages (e.g. 11.11, daily campaign, etc.) with 3-5 million total user views per month.",
      technologies: [
        "React",
        "Typescript",
        "SASS",
        "TanStack",
        "Zustand",
        "Redux",
        "Playwright",
        "Webpack",
        "Rollup",
        "Gitlab CI",
        "Browser Extension",
      ],
    },
    {
      company: "DANA Indonesia",
      companyHomepage: "https://www.dana.id/",
      title: "Associate Software Development Engineer",
      time: "Nov 2019 - Jul 2021",
      desc: "Developed and maintained dashboard application used by DANA's merchants to manage their daily operation and their user transaction.",
      technologies: [
        "React",
        "Ant Design",
        "Less",
        "Redux",
        "Jest",
        "Cypress",
        "Jenkins",
        "Webpack",
        "Gitlab CI",
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.jobsContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.jobsCategory}>
            <div className={styles.jobsList}>
              <div className={styles.jobItem}>
                <h3 className={styles.jobTitle}>{exp.company}</h3>
                <h4 className={styles.jobTime}>
                  <b>{exp.title}</b>
                  <br />
                  {exp.time}
                </h4>
                <p className={styles.jobDesc}>{exp.desc}</p>
                <div className={styles.projectTechnologies}>
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
