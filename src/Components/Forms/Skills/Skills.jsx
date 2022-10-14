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
import { useMoralis } from "react-moralis";
import { useState, useRef, useEffect } from "react";

const Skills = () => {
  const skills = [
    "ReactJs",
    "Data  Structures And Algorithms",
    "NodeJS",
    "Java",
  ];
  const [skillset, setskillset] = useState([]);
  const [currSkill, setcurrSkill] = useState("");
  const { Moralis, isAuthenticated, account } = useMoralis();
  function addskill() {
    let ss = skillset;
    ss.push(currSkill);
    setskillset(ss);
  }
  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (skillset) {
      myDetails.set("skills", skillset);
    }

    // if (theFile) {
    //   const data = theFile;
    //   const file = new Moralis.File(data.name, data);
    //   await file.saveIPFS();
    //   myDetails.set("banner", file.ipfs());
    // }

    await myDetails.save();
    window.location.reload();
  };
  return (
    <Card className={styles.BasicInfoCard}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faTerminal} size="2xl" />
        <h3>Add your skills.</h3>
      </div>
      <div className={styles.flexBox}>
        <FontAwesomeIcon icon={faLightbulb} size="2xl" />
        <Input
          type="text"
          placeholder="Add your skills here."
          onChange={(e) => setcurrSkill(e.target.value)}
        />
        <Button text="Add" onClick={addskill} />
      </div>
      <div className={styles.skillsContainer}>
        {skillset.map((skill) => (
          <Skill title={skill} />
        ))}
      </div>
      <Button className={styles.nextButton} text="Save" onClick={saveEdits} />
    </Card>
  );
};

export default Skills;
