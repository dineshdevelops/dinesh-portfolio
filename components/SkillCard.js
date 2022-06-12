import React from 'react'
import styles from "../styles/SkillCard.module.css"
const SkillCard = ({skill}) => {
  return (
    <div className={styles.skill_card}>
        <div className={styles.skill_icon}>{skill.icon}</div>
        <div className={styles.skill_name}>{skill.name}</div>
    </div>
  )
}

export default SkillCard