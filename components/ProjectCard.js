import React from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_info}>
        <label className={styles.project_title}>{project.title}</label>
        <div className={styles.project_links}>
          {project.demo && (
            <a className={styles.project_link} href={project.demo}>
              <div className={styles.link_button}>
                <img src="https://img.icons8.com/cute-clipart/25/undefined/link.png" />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className={styles.project_link} href={project.github}>
              <div className={styles.link_button}>
                <img src="https://img.icons8.com/color/25/undefined/git.png" />
                GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
          <div className={styles.project_tags}>
            {project.tags.map((tag) => {
              return <label className={styles.tag} key={tag.id}>{tag}</label>;
            })}
          </div>
      </div>
      <Image src={project.image} width="400px" height="300px"  />
    </div>
  );
};

export default ProjectCard;
