import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../public/assets/logo.svg";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <img className={styles.logo} src={Logo} alt="" />
      <h2>REGISTRATION</h2>
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
      <input type="text" placeholder="Enter Mobile Number" />
      <input type="text" placeholder="Enter Username" required/>
      <input type="password" placeholder="Enter Password" required/>
      <button className={styles.registerBtn}>Register</button>
      </form>
    </div>
  );
};

export default Register;
