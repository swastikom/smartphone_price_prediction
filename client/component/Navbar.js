import Link from "next/link";
import styles from "@/styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
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
    </nav>
  );
}

export default Navbar;
