import React from "react";
import styles from "@/styles/contact.module.css";
import ContactForm from "@/component/ContactForm";
import Image from "next/image";

function contact() {
  return (
    <div className={styles.container}>
      <ContactForm/>
    </div>
  );
}

export default contact;
