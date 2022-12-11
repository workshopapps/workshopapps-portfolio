import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/WorkshopAppLogo";
import HamburgerIcon from "../../../public/assets/HamburgerIcon.svg";
import styles from "./Navbar.module.css";
import BgOverlay from "../../UI/BgOverlay";
import NavList from "./NavList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // to toggle navbar
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  // to close navbar when escape key is pressed
  const escFuntion = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFuntion);

    return () => {
      document.removeEventListener("keydown", escFuntion);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        {/* <Link href="/"> */}
        <div onClick={handleNav}>
          <Logo />
        </div>
        {/* </Link> */}

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
