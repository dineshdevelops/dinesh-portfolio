import React from 'react'
import styles from "../../styles/WorkSection.module.css"
import Separator from './Separator'
import { WorkData } from './data/work'
import WorkCard from './WorkCard'
const WorkSection = () => {
  const data=WorkData;
  return (
    <div className={styles.work}>
      <Separator />
      <label className={styles.section_title}>Work 👨‍💻</label>
      <div className={styles.work_list}>
        {data.map((work)=>{
          return <WorkCard work={work} />
        })}
      </div>
    </div>
  )
}

export default WorkSection