import React from "react";
import Logo from "../../../public/assets/logo.svg";
import Account from "../../../public/assets/account.svg";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState, useEffect, useLayoutEffect } from "react";

const Navbar = ({ setIsModalOpen, windowSize }) => {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  function PhoneNavMenu() {
    return (
      <>
        <div
          aria-hidden
          onClick={() => setOpen(false)}
        ></div>
        <nav className={styles.mobileNav} onClick={() => setOpen(false)}>
          
          <ul className={styles.mobileList}>
            <li>
              <Link to="" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="" className={styles.link}>
                Active Routes
              </Link>
            </li>
            <li>
              <Link to="" className={styles.link}>
                Files
              </Link>
            </li>
            <li>
              <Link to="" className={`${styles.link} ${styles.account}`}>
                Account <img src={Account} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <header>
      {(windowWidth > 900) ? (
        /* Desktop Navigation ------------------------- */
        <>
          <nav className={styles.navbar}>
          <div>
        <img className={styles.logo} src={Logo} alt="" />
      </div>
            <div className={styles.navbarElem}>
              <ul className={styles.list}>
                <li>
                  <Link to="" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" className={styles.link}>
                    Active Routes
                  </Link>
                </li>
                <li>
                  <Link to="" className={styles.link}>
                    Files
                  </Link>
                </li>
                <li>
                  <Link to="" className={`${styles.link} ${styles.account}`}>
                    Account <img src={Account} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <>
          {/* Phone Navigation -------------------------------------------- */}
          <div>
        <img className={styles.logo} src={Logo} alt="" />
      </div>
          <div className={styles.hamIcon}>
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen && <PhoneNavMenu />}
        </>
      )}
    </header>
  );
};

export default Navbar;
