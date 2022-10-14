import React from "react";
import sharedStyles from "../../SharedStyles.module.css";
import styles from "./Metamask.module.css";
import Card from "../Shared/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Shared/Button/Button";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Metamask = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  console.log(isAuthenticated);

  return (
    <Card className={styles.metaCard}>
      <div className={styles.metaIcon}>
        <FontAwesomeIcon icon={faM} size="6x" />
      </div>
      <Button
        className={styles.button}
        text="Signin with metamask"
        onClick={() => authenticate()}
      />
      <p className={`${styles.disclaimer} ${sharedStyles.subText}`}>
        Sign in through your metamask account
      </p>
    </Card>
  );
};

export default Metamask;
