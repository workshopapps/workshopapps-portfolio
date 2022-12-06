import React from "react";
import Image from "next/image";
import Logo from "../../assets/WorkshopAppLogo.svg";
import HamburgerIcon from "../../assets/HamburgerIcon.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo" />
      <Image src={HamburgerIcon} alt="hamburger" />
    </header>
  );
};

export default Navbar;
