import React from "react";
import Card from "../../Shared/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <Card className={styles.BasicInfoCard}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faLink} size="2xl" />
        <h3>Add your social profile links.</h3>
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/linkedin.svg"
          alt="linkedin"
          className={styles.svgIcon}
        />
        <Input placeholder="LinkedIn" type="text" />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/github.svg"
          alt="github"
          className={styles.svgIcon}
        />
        <Input placeholder="GitHub" type="text" />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/hackerrank.svg"
          alt="leetcode"
          className={styles.svgIcon}
        />
        <Input placeholder="Hackerrank" type="text" />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/cubes-solid.svg"
          alt="other"
          className={styles.svgIcon}
        />
        <Input placeholder="Other" type="text" />
      </div>

      <Button className={styles.nextButton} text="Next" />
    </Card>
  );
};

export default Social;
