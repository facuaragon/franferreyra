"use client";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import MenuIcon from "../icons/MenuIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState();
  const [menu, setMenu] = useState(false);
  const navbarHeight = 0;

  const changeBg = () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 0) {
      setScrolled(true);
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
    }
    console.log("pathname: ", pathname);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, [pathname]);

  const toggleNav = (e) => {
    e.preventDefault();
    menu && setMenu(false);
    !menu && setMenu(true);
  };

  return (
    <>
      <header
        className={
          scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
        }
      >
        <div className={styles.logo}>
          {pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              to="welcome"
              spy={true}
              offset={navbarHeight}
              smooth={true}
              duration={800}
            >
              Francisco Ferreyra
            </ScrollLink>
          ) : (
            <Link href="/">Home</Link>
          )}
        </div>
        {pathname === "/" && (
          <>
            <nav>
              <ul className={styles.navLinks}>
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="entrevistas"
                    spy={true}
                    offset={navbarHeight}
                    smooth={true}
                    duration={800}
                  >
                    Entrevistas
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="notas"
                    spy={true}
                    offset={navbarHeight}
                    smooth={true}
                    duration={800}
                  >
                    Notas
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="produccion"
                    spy={true}
                    offset={navbarHeight}
                    smooth={true}
                    duration={800}
                  >
                    Producción
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="streaming"
                    spy={true}
                    offset={navbarHeight}
                    smooth={true}
                    duration={800}
                  >
                    Streaming
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="acerca"
                    spy={true}
                    offset={navbarHeight}
                    smooth={true}
                    duration={800}
                  >
                    Acerca de Mi
                  </ScrollLink>
                </li>
              </ul>
              <div className={styles.order}>
                <a onClick={toggleNav} className={styles.menu} href="">
                  <button className={styles.menuButton}>
                    <MenuIcon width={25} height={25} fill="currentColor" />
                  </button>
                </a>
              </div>
            </nav>
            <div
              className={styles.overlay}
              id={menu ? styles.mobileMenu : undefined}
            >
              <a onClick={toggleNav} href="" className={styles.close}>
                x
              </a>
              <div className={styles.overlayContent}>
                <ScrollLink
                  activeClass="active"
                  to="entrevistas"
                  spy={true}
                  smooth={true}
                  offset={navbarHeight}
                  duration={800}
                  onClick={toggleNav}
                >
                  Entrevistas
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="notas"
                  spy={true}
                  smooth={true}
                  offset={navbarHeight}
                  duration={800}
                  onClick={toggleNav}
                >
                  Notas
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="produccion"
                  spy={true}
                  smooth={true}
                  offset={navbarHeight}
                  duration={800}
                  onClick={toggleNav}
                >
                  Producción
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="streaming"
                  spy={true}
                  smooth={true}
                  offset={navbarHeight}
                  duration={800}
                  onClick={toggleNav}
                >
                  Streaming
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="acerca"
                  spy={true}
                  smooth={true}
                  offset={navbarHeight}
                  duration={800}
                  onClick={toggleNav}
                >
                  Acerca de Mi
                </ScrollLink>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
