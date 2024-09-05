import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../public/assets/logo.svg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <img className={styles.logo} src={Logo} alt="" />
      <h2>LOGIN</h2>
      <form action="">
      <input
        type="text"
        list="designations"
        placeholder="Select Designation"
        required
      ></input>
      <datalist id="designations" className={styles.designations}>
        <option value="Manager"></option>
        <option value="Scheduler"></option>
        <option value="Planner"></option>
      </datalist>
      <input type="text" placeholder="Enter Username" required/>
      <input type="password" placeholder="Enter Password" required/>
      <button className={styles.loginBtn}>LOGIN</button>
      <Link className={styles.link}>Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
