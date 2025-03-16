import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Experience } from "./components/Experience/Experience";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
