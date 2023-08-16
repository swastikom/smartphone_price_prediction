import React from 'react'
import styles from '@/styles/about.module.css'
import Image from 'next/image';

function about() {
  return (
    <div className={styles.container}>
      <Image
        src="/about.png"
        width={700}
        height={700}
        alt="about us"
      />
      <div className={styles.aboutRight}>
        <h2>About</h2>
        <h3>
          Welcome to our innovative web application that takes the guesswork out
          of smartphone shopping! At Phone Suggest, we understand the importance
          of finding the perfect smartphone that matches your unique needs and
          preferences.
        </h3>
        <h3>
          Our cutting-edge machine learning model analyzes the features you
          desire and provides personalized recommendations, guiding you towards
          the ideal brand and budget range for your next smartphone purchase.
        </h3>
      </div>
    </div>
  );
}

export default about