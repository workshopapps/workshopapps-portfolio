import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavList.module.css";

import close from "../../assets/Close.svg";

const NavList = ({ handleNav }) => {
  return (
    <nav className={styles.navLinks}>
      {/* <div > */}
      <Image
        src={close}
        alt="close"
        onClick={() => {
          handleNav();
        }}
        className={styles.close}
      />
      {/* </div> */}

      <li className={styles.link}>
        <Link href="/">Home</Link>
      </li>

      <li className={styles.link}>
        <Link href="/about">About</Link>
      </li>

      <li className={styles.link}>
        <Link href="/method">Our Method</Link>
      </li>

      <li className={styles.link}>
        <Link href="/contact">Contact</Link>
      </li>

      <li className={styles.link}>
        <Link href="/team">Team</Link>
      </li>

      <li className={styles.link}>
        <Link href="/stories">Stories</Link>
      </li>
    </nav>
  );
};

export default NavList;
