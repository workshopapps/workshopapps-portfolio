import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkshopAppsFooterLogo from "../../../public/assets/WorkshopAppsFooterLogo.js";
import facebookIcon from "../../../public/assets/FacebookIcon.svg";
import twitterIcon from "../../../public/assets/TwitterIcon.svg";
import youtubeIcon from "../../../public/assets/YoutubeIcon.svg";
import linkedInIcon from "../../../public/assets/LinkedInIcon.svg";
import instagramIcon from "../../../public/assets/InstagramIcon.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        <WorkshopAppsFooterLogo />
      </Link>

      <div className={styles.footerIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          className={styles.footerIcon}
        >
          <Image src={facebookIcon} alt="facebook" />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          className={styles.footerIcon}
        >
          <Image src={twitterIcon} alt="twitter" />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          className={styles.footerIcon}
        >
          <Image src={youtubeIcon} alt="youtube" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className={styles.footerIcon}
        >
          <Image src={linkedInIcon} alt="linkedin" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className={styles.footerIcon}
        >
          <Image src={instagramIcon} alt="instagram" />
        </a>
      </div>
      <ul className={styles.footerLinks}>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>

        <li className={styles.link}>
          <Link href="/portfolio">Portfolio</Link>
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
