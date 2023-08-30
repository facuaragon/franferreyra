"use client";

import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import Tiktok from "../icons/Tiktok";
import styles from "./footer.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState();
  const [iconSize, setIconSize] = useState(25);

  const changeBg = () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 0) {
      setScrolled(true);
      setIconSize(20);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (pathname == "/") {
      window.addEventListener("scroll", changeBg);
      setScrolled(false);
    } else {
      setScrolled(true);
      setIconSize(20);
    }
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={
          scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
        }
      >
        <a href="https://www.linkedin.com/in/soyfranferreyra/" target="_blank">
          <Linkedin width={iconSize} height={iconSize} color={"#000"} />
          <div className={styles.tag}>LinkedIn</div>
        </a>
        <a href="https://twitter.com/soyfranferreyra" target="_blank">
          <Twitter width={iconSize} height={iconSize} color={"#000"} />
          <div className={styles.tag}>Twitter</div>
        </a>
        <a href="https://www.instagram.com/soyfranferreyra/" target="_blank">
          <Instagram width={iconSize} height={iconSize} color={"#000"} />
          <div className={styles.tag}>Instagram</div>
        </a>
        <a href="https://www.youtube.com/@soyfranferreyra" target="_blank">
          <Youtube width={iconSize} height={iconSize} color={"#000"} />
          <div className={styles.tag}>Youtube</div>
        </a>
        <a
          href="https://www.tiktok.com/@soyfranferreyra?lang=es"
          target="_blank"
        >
          <Tiktok width={iconSize} height={iconSize} color={"#000"} />
          <div className={styles.tag}>TikTok</div>
        </a>
      </header>
    </>
  );
}
