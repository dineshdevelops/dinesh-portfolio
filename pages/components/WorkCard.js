import React from 'react'
import styles from "../../styles/WorkCard.module.css"
import Image from "next/image";
const WorkCard = ({work}) => {
  return (
    <div className={styles.work_card}>
        <Image src={work.companyLogo} width="150px" height="150px" alt='work-image'/>
        <div className={styles.work_info}>
            <label className={styles.company_name}>{work.company}</label>
            <label className={styles.designation}>{work.designation}</label>
            <div className={styles.work_dates}>
                <label>{work.dateJoining}</label>-<label>{work.dateEnd}</label>
            </div>
            <div className={styles.work_desc}>
                <p>{work.work}</p>
            </div>
        </div>
    </div>
  )
}

export default WorkCard