import React from "react";
import styles from "./Timer.module.css";

const Timer = ({ items }) => (
  <div className={styles.timer}>
    <div сlassName={styles.field}>
      <span className={styles.value}> 00 :</span>
      <span сlassName={styles.label}>дн </span>
    </div>
    <div сlassName={styles.field}>
      <span className={styles.value}> 00 :</span>
      <span сlassName={styles.label}>год </span>
    </div>
    <div сlassName={styles.field}>
      <span className={styles.value}> 00 :</span>
      <span сlassName={styles.label}>хв </span>
    </div>
    <div сlassName={styles.field}>
      <span className={styles.value}> 00 :</span>
      <span сlassName={styles.label}>сек </span>
    </div>
  </div>
);

export default Timer;
