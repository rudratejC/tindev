import React from "react";
import ReactDOM from "react-dom";
import styles from "./AddPost.module.css";
import Backdrop from "../Shared/Backdrop/Backdrop";
import Card from "../Shared/Card/Card";
import { useState, useRef } from "react";
import {
  faCircleNodes,
  faFilm,
  faPanorama,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Shared/Button/Button";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const AddPost = () => {
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  const contractProcessor = useWeb3ExecuteFunction();

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [theFile, setTheFile] = useState();
  //const [tweet, setTweet] = useState();
  const [project, setProject] = useState();
  const [skill, setSkill] = useState();
  const [skillSet, setSkillSet] = useState([]);

  function addSkil() {
    let ss = skillSet;
    ss.push(skill);
    setSkillSet(ss);
  }

  async function saveProject() {
    if (!project) return;

    //const Tweets = Moralis.Object.extend("Tweets");
    const Projects = Moralis.Object.extend("Projects");
    //const newTweet = new Tweets();
    const newProject = new Projects();
    newProject.set("projectTxt", project);
    newProject.set("Pfp", user.attributes.pfp);
    newProject.set("Acc", user.attributes.ethAddress);
    newProject.set("userName", user.attributes.username);
    // let arr = ["React", "Firebase"];
    newProject.set("array", skillSet);
    // if (theFile) {
    //   const data = theFile;
    //   const file = new Moralis.File(data.name, data);
    //   await file.saveIPFS();
    //   //newProject.set("tweetImg", file.ipfs());
    //   newProject.set("img", file.ipfs());
    // }

    await newProject.save();
    window.location.reload();
  }

  const content = (
    <Card className={styles.addPost}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src="/assets/images/avatar 1.png" alt="avatar" />
        </div>
        <h3>{user.attributes.username}</h3>
      </div>
      <textarea
        placeholder="Post your feed..."
        className={styles.textArea}
        name="writepost"
        cols="30"
        rows="10"
        onChange={(e) => setProject(e.target.value)}
      />
      {/* <div className={styles.actions}>
        <div className={styles.actionIcon}>
          <FontAwesomeIcon icon={faPanorama} size="xl" />
        </div>
        <div className={styles.actionIcon}>
          <FontAwesomeIcon icon={faFilm} size="xl" />
        </div>
      </div> */}
      <textarea
        placeholder="Enter skills"
        className={styles.textArea}
        name="writepost"
        onChange={(e) => setSkill(e.target.value)}
      />
      <div className={styles.skillButton}>
        <Button text="Add Skill" onClick={addSkil} />
      </div>
      <div className={styles.postButton}>
        <Button text="Post" onClick={saveProject} />
      </div>
    </Card>
  );

  return (
    <>
      {ReactDOM.createPortal(content, document.getElementById("modal-root"))}
      {ReactDOM.createPortal(
        <Backdrop onCancel={() => {}} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default AddPost;
