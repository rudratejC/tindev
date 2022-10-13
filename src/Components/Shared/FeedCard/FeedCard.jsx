import {
  faCircleNodes,
  faPaperPlane,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../Card/Card";
import IconButton from "../IconButton/IconButton";
import Input from "../Input/Input";
import Skill from "../Skill/Skill";
import styles from "./FeedCard.module.css";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

const FeedCard = ({ profile }) => {
  const skills = [
    "ReactJS",
    "MongoDB",
    "NodeJS",
    "Algorithms",
    "Data Structures",
  ];
  const [projectArr, setprojectArr] = useState();
  const { Moralis, account } = useMoralis();
  useEffect(() => {
    async function getProjects() {
      try {
        const Projects = Moralis.Object.extend("Projects");
        const query = new Moralis.Query(Projects);

        if (profile) {
          //query.contains("array", "React");
          query.equalTo("Acc", account);
        }
        const results = await query.find();

        setprojectArr(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, [profile]);

  return (
    <div>
      {/* <Card className={styles.feed}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src="/assets/images/avatar 1.png" alt="avatar" />
          </div>
          <h3>Hardik Bhagat</h3>
        </div>
        <div className={styles.content}>
          <p>
            Binance, the world’s largest cryptocurrency exchange, confirmed
            Thursday that hackers made off with at least $100 million, but that
            the figure could have been significantly more. The Binance
            blockchain, also known as BNB Chain and Binance Smart Chain, took
            the rare step of suspending transactions and fund transfers after
            discovering a vulnerability affecting the BSC […]Binance hit by $100
            million blockchain bridge hack by Carly Page originally published on
            TechCrunch.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <Skill title={skill} />
          ))}
        </div>
        <div className={styles.actions}>
          <div className={styles.actionIcon}>
            <FontAwesomeIcon icon={faThumbsUp} size="xl" />
            <span>5</span>
          </div>
          <div className={styles.actionIcon}>
            <FontAwesomeIcon icon={faThumbsDown} size="xl" />
            <span>0</span>
          </div>
          <FontAwesomeIcon
            icon={faCircleNodes}
            size="xl"
            className={styles.actionIcon}
          />
        </div>
        <div className={styles.comment}>
          <Input placeholder="Comments" type="text" />
          <IconButton icon={faPaperPlane} size="xl" className={styles.send} />
        </div>
      </Card> */}

      {projectArr
        ?.map((e) => {
          return (
            <Card className={styles.feed}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  <img src="/assets/images/avatar 1.png" alt="avatar" />
                </div>
                <h3>{e.attributes.userName}</h3>
              </div>
              <div className={styles.content}>
                <p>{e.attributes.projectTxt}</p>
              </div>
              <div className={styles.skillsContainer}>
                {e.attributes.array.map((skill) => (
                  <Skill title={skill} />
                ))}
              </div>
              <div className={styles.actions}>
                <div className={styles.actionIcon}>
                  <FontAwesomeIcon icon={faThumbsUp} size="xl" />
                  <span>5</span>
                </div>
                <div className={styles.actionIcon}>
                  <FontAwesomeIcon icon={faThumbsDown} size="xl" />
                  <span>0</span>
                </div>
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size="xl"
                  className={styles.actionIcon}
                />
              </div>
              <div className={styles.comment}>
                <Input placeholder="Comments" type="text" />
                <IconButton
                  icon={faPaperPlane}
                  size="xl"
                  className={styles.send}
                />
              </div>
            </Card>
          );
        })
        .reverse()}
    </div>
  );
};

export default FeedCard;
