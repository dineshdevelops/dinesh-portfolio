import React from 'react'
import styles from "../../styles/ProjectSection.module.css"
import {ProjectData} from "../../public/data/ProjectData"
import ProjectCard from './ProjectCard'
import Separator from './Separator'
const ProjectsSection = () => {
  const data = ProjectData
  return (
    <div className={styles.projects}>
      <Separator />
      <label className={styles.section_title}>Projects 🚀</label>
      <div>
        {
          data.map((project)=>{
            return <ProjectCard project={project} key={project.id}/>;
          })
        }
      </div>
    </div>
  )
}

export default ProjectsSection