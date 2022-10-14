import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../../Shared/Card/Card";
import Input from "../../Shared/Input/Input";
import styles from "./BasicInfo.module.css";
import Button from "../../Shared/Button/Button";
import { useState, useRef, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const BasicInfo = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [ccode, setccode] = useState(91);
  const [contact, setcontact] = useState();
  const [clgName, setclgName] = useState();
  const { Moralis, isAuthenticated, account } = useMoralis();

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (fName) {
      myDetails.set("username", fName + " " + lName);
    }
    if (country) {
      myDetails.set("country", country);
    }
    if (state) {
      myDetails.set("state", state);
    }
    if (ccode) {
      myDetails.set("ccode", ccode);
    }
    if (contact) {
      myDetails.set("contact", contact);
    }
    if (clgName) {
      myDetails.set("clgName", clgName);
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
        <FontAwesomeIcon icon={faUser} size="2xl" />
        <h3>Enter your personal information.</h3>
      </div>
      <div className={`${styles.name} ${styles.flexBox}`}>
        <Input
          placeholder="First name"
          type="text"
          onChange={(e) => setfName(e.target.value)}
        />
        <Input
          placeholder="Last name"
          type="text"
          onChange={(e) => setlName(e.target.value)}
        />
      </div>
      <div className={`${styles.location} ${styles.flexBox}`}>
        <Input
          placeholder="Country"
          type="text"
          onChange={(e) => setcountry(e.target.value)}
        />
        <Input
          placeholder="State"
          type="text"
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
      <div className={`${styles.contact} ${styles.flexBox}`}>
        <Input
          placeholder="Country-code"
          type="number"
          onChange={(e) => setccode(e.target.value)}
        />
        <Input
          placeholder="Contact"
          type="tel"
          onChange={(e) => setcontact(e.target.value)}
        />
      </div>
      <div className={`${styles.education} ${styles.flexBox}`}>
        <Input
          placeholder="Institute name"
          type="text"
          onChange={(e) => setclgName(e.target.value)}
        />
        {/* <Input placeholder="Grad year" type="date" /> */}
      </div>
      <Button className={styles.nextButton} text="Save" onClick={saveEdits} />
    </Card>
  );
};

export default BasicInfo;
