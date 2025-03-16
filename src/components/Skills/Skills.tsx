import React from "react";
import styles from "./Skills.module.scss";

interface Skill {
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML5", icon: "🌐" },
    { name: "SASS | Tailwind", icon: "🎨" },
  ];

  const otherSkills: Skill[] = [
    { name: "Redux | Zustand | TanStack", icon: "🔁" },
    { name: "Gitlab CI | Github", icon: "📊" },
    { name: "Webpack | Rollup | Vite", icon: "📦" },
    { name: "Playwright | Jest", icon: "🧪" },
    { name: "UI/UX", icon: "🎯" },
  ];

  const otherTech = [
    "Storybook",
    "Next.js",
    "GraphQL",
    "Node.js",
    "Browser Extension",
    "Docker",
    "AWS",
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.sectionDescription}>
          Here are some of the technologies and tools I work with
        </p>
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>Frontend Development</h3>
          <div className={styles.skillsList}>
            {frontendSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>Other Skills</h3>
          <div className={styles.skillsList}>
            {otherSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.technologies}>
        <h3 className={styles.technologiesTitle}>Other Technologies I Use</h3>
        <div className={styles.techTags}>
          {otherTech.map((tech, idx) => (
            <span key={idx} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
