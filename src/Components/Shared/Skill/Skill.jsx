import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ title }) => {
  return (
    <div className={styles.skill}>
      <p>{title}</p>
      <span>
        <FontAwesomeIcon icon={faXmark} size="xs" />
      </span>
    </div>
  );
};

export default Skill;
