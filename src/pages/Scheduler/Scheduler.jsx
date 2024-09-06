import React from "react";
import Route from "../../../public/assets/Frame 29.png";
import styles from "./Scheduler.module.css";
import GoogleMapComponent from "../../components/GoogleMaps/GoogleMapComponent";

const Scheduler = () => {
  return (
    <>
      <section className={styles.scheduler}>
        <h2>Bus Route</h2>
        <form action="">
          <span className={styles.label}>Enter Bus Number: </span>
          <input type="text" placeholder="UP14 45 0012" required />
        </form>
        <span className={styles.label}>Route:</span>
        <img className={styles.route} src={Route} alt="" />
        <div className={styles.map}>
        <span className={styles.Lablel}>Geographic Location: </span>
        <GoogleMapComponent />
        </div>
      </section>
    </>
  );
};

export default Scheduler;
