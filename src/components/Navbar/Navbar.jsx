import React from "react";
import Logo from "../../../public/assets/logo.svg";
import Account from "../../../public/assets/account.svg";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className={styles.logo} src={Logo} alt="" />
      </div>
      <div className={styles.navbarElem}>
        <ul className={styles.list}>
          <li><Link to="" className={styles.link}>Home</Link></li>
          <li><Link to="" className={styles.link}>Active Routes</Link></li>
          <li><Link to="" className={styles.link}>Files</Link></li>
          <li>
            <Link to="" className={`${styles.link} ${styles.account}`}>
            Account <img src={Account} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
