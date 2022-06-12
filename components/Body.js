import React from "react";
import styles from "../styles/Body.module.css";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import WorkSection from "./WorkSection";
const Body = () => {
  return (
    <div className={styles.body}>
      <section id="about">
        <AboutSection />
      </section>
      <section id="project">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Body;
