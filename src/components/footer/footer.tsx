import styles from "./styles.module.scss";
import lnkdin from "../../../public/lnkdin.png";
import insta from "../../../public/insta.png";
import face from "../../../public/face.png";
import mobile from "../../../public/mobile.png";
import localization from "../../../public/localization.png";
import at from "../../../public/at.png";

import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.footerWrapper}>
        <section className={styles.nameInfo}>
          <h1>Software Company</h1>
          <p>Creative Design & Development Agency in Canada.</p>
          <div className={styles.network}>
            <Image src={lnkdin} alt="social Network" />
            <Image src={insta} alt="social Network" />
            <Image src={face} alt="social Network" />
          </div>
        </section>
        <section className={styles.support}>
          <h2>Support</h2>
          <p>About</p>
          <p>UX/UI Design</p>
          <p>Graphic Design</p>
          <p>Business Strategy</p>
          <p>App Development</p>
        </section>
        <section className={styles.services}>
          <h2>Services</h2>
          <p>Blog</p>
          <p>Service</p>
          <p>Portfolio</p>
          <p>Pricing Plan</p>
          <p>Contact Us</p>
        </section>
        <section className={styles.contact}>
          <h2>Contact</h2>
          <p>
            <Image src={localization} alt="localization mark" /> 437 Melborne
            Ave #4, NY 13253, Australia
          </p>
          <p>
            <Image src={mobile} alt="mobile img" />
            1-962-885-781
          </p>
          <p>
            <Image src={at} alt="at mark" />
            software@software.com
          </p>
        </section>
      </div>
      <div className={styles.trace}></div>
      <div className={styles.rights}>Copyright 2023, All Rights Reserved</div>
    </footer>
  );
}
