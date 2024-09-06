import React from "react";
import { Link } from 'react-router-dom';
import Route from "../../../public/assets/Frame 29.png";
import styles from "./Scheduler.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  return (
    <>
      <Navbar/>
    <section className={styles.scheduler}>
      <h2>Bus Route</h2>
      <form action="">
      <span className={styles.label}>Enter Bus Number: </span>
      <input type="text" placeholder="UP14 QT 0069" required/>
      </form>
      <span className={styles.label}>Route:</span>
        <img className={styles.route} src={Route} alt="" />
        {/* <span className={styles.geoLablel}>Geographic Location</span> */}
    </section>
    </>
  );
};

export default Register;
