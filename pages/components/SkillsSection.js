import React from "react";
import styles from "../../styles/Skills.module.css";
import { SkillsData } from "./data/skills";
import Separator from "./Separator";
import SkillCard from "./SkillCard";
const SkillsSection = () => {
  const data = SkillsData;
  return (
    <div className={styles.skills}>
      <Separator />
      <label className={styles.section_title}>Skills 🧰</label>
      <div className={styles.skills_container}>
        {data.map((item) => {
          return (
            <div className={styles.skill_section}>
              <label className={styles.skill_section_title}>{item.type}</label>
              <div className={styles.skills_list}>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
