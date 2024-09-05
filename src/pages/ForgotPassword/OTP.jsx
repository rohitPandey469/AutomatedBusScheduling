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
        <span className={styles.label}>Enter OTP Sent To Your Mobile Number</span>
      <input type="text" placeholder="000 000" required/>
      <button className={styles.proceedBtn}>Proceed</button>
     </form>
    </div>
  );
};

export default Login;
