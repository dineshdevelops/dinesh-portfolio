import React from "react";
import styles from "../../styles/About.module.css";
import CodingAnimation from "../../public/assets/Coding-Animation.gif"
import Image from "next/image";
import SocialNetworks from "./SocialNetworks";
const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_top}>
        <div className={styles.about_info}>
          Hello There 👋, I am <br />
          <span className={styles.info_name}>Dinesh</span>.<br /> I'm a Full
          Stack Web🌐 Dev🛠️ .
        </div>
        <div className={styles.about_photo}>
            <Image src={CodingAnimation} className={styles.info_picture} height="450px" width="450px" />
        </div>
      </div>
      <div className="about_bottom">
        <SocialNetworks />
      </div>
    </div>
  );
};

export default AboutSection;
