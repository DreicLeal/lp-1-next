"use client";
import Image from "next/image";
import trace from "../../../public/trace.png";
import styles from "./styles.module.scss";
import { testimonials } from "@/database/database";
import { motion } from "framer-motion";
import { useRef, RefObject, useEffect, useState } from "react";
import Trace from "../trace/Trace";

export default function Testimonial() {
  const carousel: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <>
      <section className={styles.testimonials}>
        <Trace section="Testimonial" />
        <h2>Customers Talk About Us</h2>
        <p className={styles.value}>
          Customer support represents the resources within your company that
          provide technical assistance to consumers after they purchase a
          product or service.
        </p>
        <motion.div
          ref={carousel}
          className={styles.carrousselWrapper}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.ul
            className={styles.carroussel}
            drag="x"
            dragConstraints={{ left: -width, right: width }}
          >
            {testimonials.map((testimonial) => (
              <motion.li key={testimonial.id} className={styles.depoiment}>
                <p>{testimonial.testimonial}</p>
                <div className={styles.info}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="50"
                    height="50"
                  />
                  <div>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.from}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </>
  );
}
