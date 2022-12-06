import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/WorkshopAppLogo.svg";
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
          <Image src={Logo} alt="logo" />
        </Link>

        <Image
          src={HamburgerIcon}
          alt="hamburger"
          onClick={handleNav}
          className={styles.hamburger}
        />
      </header>
      {isOpen && <NavList handleNav={handleNav} />}
      {isOpen && <BgOverlay handleBg={handleNav} />}
    </>
  );
};

export default Navbar;
