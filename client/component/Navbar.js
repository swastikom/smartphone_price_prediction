"use client";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const isServer = typeof window === "undefined";

  const [showNav, setShowNav] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isServer) {
        const screenSize = window.innerWidth;
        setShowNav(screenSize >= 768);
        setIsSmallScreen(screenSize < 768);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isServer]);

  return (
    <nav className={styles.container}>
      <span className={styles.logo}>
        {!isSmallScreen && (
          <Link href="/">
            <h1>PhoneSuggest</h1>
          </Link>
        )}
        {!showNav && (
          <Link href="/">
            <h1>PhoneSuggest</h1>
          </Link>
        )}
      </span>
      {isSmallScreen && (
        <button className={styles.hamburger} onClick={handleToggle}>
          {showNav ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      )}

      <ul className={`${styles.links} ${showNav ? styles.active : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
