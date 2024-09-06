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
          <input type="text" placeholder="UP14 QT 0069" required />
        </form>
        <span className={styles.label}>Route:</span>
        <img className={styles.route} src={Route} alt="" />
        <span className={styles.geoLablel}>Geographic Location</span>
        <GoogleMapComponent />
      </section>
    </>
  );
};

export default Scheduler;
