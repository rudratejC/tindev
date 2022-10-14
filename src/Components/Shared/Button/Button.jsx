import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      <span>{text}</span>
      <img
        className={styles.arrow}
        src="/assets/images/right-arrow.png"
        alt="arrow"
      />
    </button>
  );
};

export default Button;
