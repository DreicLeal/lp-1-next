"use client";
import styles from "./styles.module.scss";
import { companyInfo } from "@/database/database";
import { useState } from "react";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("");
  const sections = ["Home", "About", "Services", "Pages", "Contact"];
  return (
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
        <button>Get Started</button>
      </div>
    </header>
  );
};
export default Header;
