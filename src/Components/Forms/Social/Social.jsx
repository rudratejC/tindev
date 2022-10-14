import React from "react";
import Card from "../../Shared/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import styles from "./Social.module.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import { useState, useRef, useEffect } from "react";
const Social = () => {
  const { Moralis, isAuthenticated, account } = useMoralis();
  const [linkdin, setlinkdin] = useState("");
  const [github, setgithub] = useState("");
  const [hackerrank, sethackerrank] = useState("");
  const [other, setother] = useState("");
  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (linkdin) {
      myDetails.set("linkdin", linkdin);
    }
    if (github) {
      myDetails.set("github", github);
    }
    if (hackerrank) {
      myDetails.set("hackerrank", hackerrank);
    }
    if (other) {
      myDetails.set("other", other);
    }
    myDetails.set("activated", true);

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
        <FontAwesomeIcon icon={faLink} size="2xl" />
        <h3>Add your social profile links.</h3>
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/linkedin.svg"
          alt="linkedin"
          className={styles.svgIcon}
        />
        <Input
          placeholder="LinkedIn"
          type="text"
          onChange={(e) => setlinkdin(e.target.value)}
        />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/github.svg"
          alt="github"
          className={styles.svgIcon}
        />
        <Input
          placeholder="GitHub"
          type="text"
          onChange={(e) => setgithub(e.target.value)}
        />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/hackerrank.svg"
          alt="leetcode"
          className={styles.svgIcon}
        />
        <Input
          placeholder="Hackerrank"
          type="text"
          onChange={(e) => sethackerrank(e.target.value)}
        />
      </div>
      <div className={`${styles.flexBox}`}>
        <img
          src="/assets/images/cubes-solid.svg"
          alt="other"
          className={styles.svgIcon}
        />
        <Input
          placeholder="Other"
          type="text"
          onChange={(e) => sethackerrank(e.target.value)}
        />
      </div>

      <Button className={styles.nextButton} text="Save" onClick={saveEdits} />
    </Card>
  );
};

export default Social;
