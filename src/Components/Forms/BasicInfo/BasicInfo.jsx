import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../../Shared/Card/Card";
import Input from "../../Shared/Input/Input";
import styles from "./BasicInfo.module.css";
import Button from "../../Shared/Button/Button";

const BasicInfo = () => {
  return (
    <Card className={styles.BasicInfoCard}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faUser} size="2xl" />
        <h3>Enter your personal information.</h3>
      </div>
      <div className={`${styles.name} ${styles.flexBox}`}>
        <Input placeholder="First name" type="text" />
        <Input placeholder="Last name" type="text" />
      </div>
      <div className={`${styles.location} ${styles.flexBox}`}>
        <Input placeholder="Country" type="text" />
        <Input placeholder="State" type="text" />
      </div>
      <div className={`${styles.contact} ${styles.flexBox}`}>
        <Input placeholder="Country-code" type="number" />
        <Input placeholder="Contact" type="tel" />
      </div>
      <div className={`${styles.education} ${styles.flexBox}`}>
        <Input placeholder="Institute name" type="text" />
        <Input placeholder="Grad year" type="date" />
      </div>
      <Button className={styles.nextButton} text="Next" />
    </Card>
  );
};

export default BasicInfo;
