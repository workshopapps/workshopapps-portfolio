import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavList.module.css";
import close from "../../../public/assets/Close.svg";

const NavList = ({ handleNav, isOpen }) => {
  return (
    <nav className={`${styles.navLinks} ${isOpen && styles.showNavLinks}`}>
      <Image
        src={close}
        alt="close"
        onClick={() => {
          handleNav();
        }}
        className={styles.close}
      />

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/">Home</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/portfolio">Portfolio</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/about">About</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/method">Our Method</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/contact">Contact</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/team">Team</Link>
      </li>

      <li
        className={styles.link}
        onClick={() => {
          handleNav();
        }}
      >
        <Link href="/stories">Stories</Link>
      </li>
    </nav>
  );
};

export default NavList;
