import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../public/assets/logo.svg";
import styles from "./ForgotPassword.module.css";

const Login = () => {
  return (
    <div className={styles.password}>
      <img className={styles.logo} src={Logo} alt="" />
      <h2>NEW PASSWORD</h2>
      <form action="">
      <input type="text" placeholder="New Password" required/>
      <input type="text" placeholder="Confirm Password" required/>
      <button className={styles.proceedBtn}>Update</button>
     </form>
    </div>
  );
};

export default Login;
