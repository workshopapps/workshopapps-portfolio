import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/WorkshopAppLogo";
import HamburgerIcon from "../../assets/HamburgerIcon.svg";

import styles from "./Navbar.module.css";

import BgOverlay from "../../UI/BgOverlay";
import NavList from "./NavList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>

        <Image
          src={HamburgerIcon}
          alt="hamburger"
          onClick={handleNav}
          className={styles.hamburger}
        />
      </header>
      <NavList isOpen={isOpen} handleNav={handleNav} />
      <BgOverlay isOpen={isOpen} handleBg={handleNav} />
    </>
  );
};

export default Navbar;
