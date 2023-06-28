import Image from "next/image";
import trace from "../../../public/trace.png";
import styles from "./styles.module.scss";

interface Itrace{
    section: string;
    company?: string;
}

export default function Trace({section, company}: Itrace) {

    return (
        <div className={styles.headWrapper}>
        <Image src={trace} alt="trace" className={styles.trace} />{" "}
        <span className={styles.greeting}>{section}<span className={styles.companyName}> {company}</span></span>
      </div>
    )
}