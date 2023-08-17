import React from "react";
import Image from "next/image";
import styles from "@/styles/hero.module.css";
import FormPage from "./FormPage";

function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/smartphone.png"
        width={600}
        height={600}
        alt="hero image phone"
        className={styles.imageStyle}
      />
      <FormPage />
    </div>
  );
}

export default Hero;
