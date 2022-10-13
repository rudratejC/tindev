import {
  faLightbulb,
  faTerminal,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../Shared/Button/Button";
import Card from "../../Shared/Card/Card";
import Input from "../../Shared/Input/Input";
import Skill from "../../Shared/Skill/Skill";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = [
    "ReactJs",
    "Data  Structures And Algorithms",
    "NodeJS",
    "Java",
  ];

  return (
    <Card className={styles.BasicInfoCard}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faTerminal} size="2xl" />
        <h3>Add your skills.</h3>
      </div>
      <div className={styles.flexBox}>
        <FontAwesomeIcon icon={faLightbulb} size="2xl" />
        <Input type="text" placeholder="Add your skills here." />
        <Button text="Add" />
      </div>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => (
          <Skill title={skill} />
        ))}
      </div>
      <Button className={styles.nextButton} text="Next" />
    </Card>
  );
};

export default Skills;
