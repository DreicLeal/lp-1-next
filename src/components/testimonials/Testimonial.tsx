"use client";
import Image from "next/image";
import trace from "../../../public/trace.png";
import styles from "../../app/styles.module.scss"
import { testimonials } from "@/database/database";
import { motion } from "framer-motion";
import { useRef, RefObject, useEffect, useState } from "react";

export default function Testimonial() {
  const carousel: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);
  return (
    <>
      <section className={styles.testimonials}>
        <div className={styles.headWrapper}>
          <Image src={trace} alt="trace" className={styles.trace} />{" "}
          <span className={styles.greeting}>Testimonials</span>
          <h2>Customers Talk About Us</h2>
        </div>
        <p>
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
            dragConstraints={{ right: 0, left: -width }}
          >
            {testimonials.map((testimonial) => (
              <motion.li key={testimonial.id} className={styles.depoiment}>
                <p>{testimonial.testimonial}</p>
                <div>
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
