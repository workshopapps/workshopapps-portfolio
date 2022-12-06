import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/WorkshopAppsFooterLogo.svg";
import facebookIcon from "../../assets/FacebookIcon.svg";
import twitterIcon from "../../assets/TwitterIcon.svg";
import youtubeIcon from "../../assets/YoutubeIcon.svg";
import linkedInIcon from "../../assets/LinkedInIcon.svg";
import instagramIcon from "../../assets/InstagramIcon.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={logo} alt="logo" />

      <div className={styles.footerIcons}>
        <a href="https://facebook.com" target="_blank">
          <Image src={facebookIcon} alt="facebook" />
        </a>

        <a href="https://twitter.com" target="_blank">
          <Image src={twitterIcon} alt="twitter" />
        </a>

        <a href="https://youtube.com" target="_blank">
          <Image src={youtubeIcon} alt="youtube" />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <Image src={linkedInIcon} alt="linkedin" />
        </a>

        <a href="https://instagram.com" target="_blank">
          <Image src={instagramIcon} alt="instagram" />
        </a>
      </div>

      <ul className={styles.footerLinks}>
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
      </ul>
    </footer>
  );
};

export default Footer;
