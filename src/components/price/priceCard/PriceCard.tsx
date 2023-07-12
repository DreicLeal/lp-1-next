import { IPriceTable } from "@/interfaces";
import styles from "./styles.module.scss";

export default function PriceCard({ name, advantage, price }: IPriceTable) {
  return (
    <div className={styles.priceCard}>
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.advantage}>{advantage}</span>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>
          $<span>{(price / 12).toFixed(2)}</span>/mon
        </p>
        <span>Yearly 15% Off</span>
      </div>
      <div className={styles.pack}>
        <p>✓ Unlimited Products</p>
        <p>✓ Unlimited Products</p>
        <p>✓ Unlimited Products</p>
        <p>✓ Unlimited Products</p>
        <p>✓ Unlimited Products</p>
      </div>
      <button>Buy Now</button>
    </div>
  );
}
