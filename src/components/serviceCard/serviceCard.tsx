import Image from "next/image";
import styles from "./styles.module.scss";
import { IService } from "@/interfaces";
const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <li className={styles.card}>
      <Image src={service.image} width="75" height="75" alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </li>
  );
};
export default ServiceCard;
