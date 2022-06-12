import React from "react";
import styles from "../../styles/ContactSection.module.css";
import Separator from "./Separator";
import SocialNetworks from "./SocialNetworks";
const ContactSection = () => {
  return (
    <div className={styles.contact}>
      <Separator />
      <label className={styles.section_title}>Contact Me 🤙🏼</label>
      <div className={styles.contact_container}>
        <div className={styles.contact_left}>
          <p>Want to get in touch ? Contact me in any of the platform !</p>
          <SocialNetworks />
        </div>
        <div className={styles.download}>
          <a download href={require("../../public/assets/DineshResume.pdf").default}>
          <img src="https://img.icons8.com/material-outlined/24/undefined/download--v1.png"/>            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
