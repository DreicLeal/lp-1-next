"use client";
import styles from "./styles.module.scss";
import { companyInfo } from "@/database/database";
import { useState } from "react";
import Button from "../button/Button";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("");
  const sections = ["Home", "About", "Services", "Pages", "Contact"];
  return (
    <div className={styles.headerWrapper}>
        
    <header className={styles.container} id="home">
      <div className={styles.companyName}>{companyInfo.name}</div>
      <div className={styles.navigation}>
        <nav>
          {sections.map((section) => (
            <a
              className={currentSection === section ? styles.current : ""}
              onClick={() => setCurrentSection(section)}
              key={section}
            >
              {section}
            </a>
          ))}
        </nav>
        <Button />
      </div>
    </header>
      </div>
  );
};
export default Header;
