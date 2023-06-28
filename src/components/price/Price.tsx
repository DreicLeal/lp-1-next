"use client";
import Image from "next/image";
import trace from "../../../public/trace.png";
import styles from "./styles.module.scss";
import { Switch } from "@mui/material";
import { useState } from "react";
import PriceCard from "./priceCard/PriceCard";
import Trace from "../trace/Trace";

export default function Price() {
  const [basicPrice, setBasicPrice] = useState(29.52);
  const [standardPrice, setStandardPrice] = useState(69);
  const [premiumPrice, setPremiumPrice] = useState(123);
  const handleChange = () => {
    basicPrice == 29.52
      ? setBasicPrice(basicPrice * 0.85)
      : setBasicPrice(29.52);
    standardPrice == 69
      ? setStandardPrice(standardPrice * 0.85)
      : setStandardPrice(69);
    premiumPrice == 123
      ? setPremiumPrice(premiumPrice * 0.85)
      : setPremiumPrice(123);
  };
  return (
    <section className={styles.priceTable}>
      <div className={styles.headWrapper}>
        <Trace section="Pricing" />
        <h2>The best pricing plan</h2>
      </div>
      <div className={styles.priceChoice}>
        <p>Monthly</p>
        <Switch onChange={handleChange} />
        <p>Yearly</p>
      </div>
      <div className={styles.plans}>
        <PriceCard name="Basic" advantage="Most Popular" price={basicPrice} />
        <PriceCard
          name="Standard"
          advantage="Recommended"
          price={standardPrice}
        />
        <PriceCard name="Premium" advantage="Best Value" price={premiumPrice} />
      </div>
    </section>
  );
}
