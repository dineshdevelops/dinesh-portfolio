import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logo}><span className={styles.d}>D</span>inesh</div>
      <div className={styles.menu}>
        <div className={styles.web_menu}>
          <div className={styles.web_options}>
            <a href="#project">
              <img
                src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/35/undefined/external-project-organization-xnimrodx-blue-xnimrodx.png"
                className={styles.option_icon}
              />
              Projects
            </a>
          </div>
          <div className={styles.web_options}>
            <a href="#skills">
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/35/undefined/external-technology-robotics-flaticons-flat-flat-icons.png"
                className={styles.option_icon}
              />
              Skills
            </a>
          </div>
          <div className={styles.web_options}>
            <a href="#work">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/35/undefined/external-work-lifestyles-flaticons-lineal-color-flat-icons-3.png"
                className={styles.option_icon}
              />
              Work
            </a>
          </div>
          <div className={styles.web_options}>
            <a href="#contact">
              <img
                src="https://img.icons8.com/external-flatarticons-blue-flatarticons/35/undefined/external-contact-contact-us-flatarticons-blue-flatarticons-1.png"
                className={styles.option_icon}
              />
              Contact Us
            </a>
          </div>
        </div>
        <div className={styles.mobile_menu}>
          <div onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && (<img src="https://img.icons8.com/external-flatarticons-blue-flatarticons/30/undefined/external-menu-ux-and-ui-flatarticons-blue-flatarticons.png" />) }
            {isOpen && (
              <div className={styles.mobile}>
                <div className={styles.close_icon} onClick={() => setIsOpen(!isOpen)}>
                  <img src="https://img.icons8.com/glyph-neue/35/undefined/multiply.png" />
                </div>
                <div className={styles.mobile_options}>
                  <div className={styles.mobile_option}>
                    <a href="#project">
                      <img
                        src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/35/undefined/external-project-organization-xnimrodx-blue-xnimrodx.png"
                        className={styles.option_icon}
                      />
                      Projects
                    </a>
                  </div>
                  <div className={styles.mobile_option}>
                    <a href="#skills">
                      <img
                        src="https://img.icons8.com/external-flaticons-flat-flat-icons/35/undefined/external-technology-robotics-flaticons-flat-flat-icons.png"
                        className={styles.option_icon}
                      />
                      Skills
                    </a>
                  </div>
                  <div className={styles.mobile_option}>
                    <a href="#work">
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/35/undefined/external-work-lifestyles-flaticons-lineal-color-flat-icons-3.png"
                        className={styles.option_icon}
                      />
                      Work
                    </a>
                  </div>
                  <div className={styles.mobile_option}>
                    <a href="#contact">
                      <img
                        src="https://img.icons8.com/external-flatarticons-blue-flatarticons/35/undefined/external-contact-contact-us-flatarticons-blue-flatarticons-1.png"
                        className={styles.option_icon}
                      />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
