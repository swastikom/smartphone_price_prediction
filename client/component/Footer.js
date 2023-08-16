import React from 'react'
import styles from '@/styles/footer.module.css'
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <Link href="/">
          <h1>PhoneSuggest</h1>
        </Link>
        <div className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </div>
        <div className={styles.links}>
          <li>
            <Link
              href="https://www.kaggle.com/datasets/shrutiambekar/smartphone-specifications-and-prices-in-india"
              target="_blank"
            >
              Dataset
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/swastikom/smartphone_price_prediction"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy;
        <Link href="https://github.com/swastikom" target="_blank">
          2023 by Swastik Dhar
        </Link>
      </div>
    </div>
  );
}

export default Footer