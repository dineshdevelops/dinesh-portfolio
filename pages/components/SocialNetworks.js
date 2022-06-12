import React from "react";
import { SocialData } from "../../public/data/SocialData";
import Image from "next/image";
import styles from "../../styles/SocialNetworks.module.css";
const SocialNetworks = () => {
  const data = SocialData;
  return (
    <div className={styles.social_contact}>
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
            <div className={styles.social_icon_div}>
              <Image src={item.icon} className={styles.social_icon} height="45px" width="45px" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialNetworks;
