import Card from "../Shared/Card/Card";
import FeedCard from "../Shared/FeedCard/FeedCard";
import Input from "../Shared/Input/Input";
import styles from "./Feeds.module.css";
import AddPost from "../AddPost/AddPost";
import { useState } from "react";
import { Button } from "web3uikit";
import { useMoralis } from "react-moralis";
import { Link, useNavigate } from "react-router-dom";

const Feeds = () => {
  const navigate = useNavigate();

  const [isAddPost, setIsAddPost] = useState(false);
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  const activated = user.attributes.activated;
  console.log(activated);
  function changeToPost() {
    if (!activated) {
      return;
    }
    setIsAddPost(true);
  }

  function navToProfile() {
    navigate("/profile");
  }

  return (
    <div className={styles.feeds}>
      <Card className={styles.createPost}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src="/assets/images/avatar 1.png" alt="avatar" />
          </div>
          <Input
            type="text"
            placeholder="What's on your mind?"
            disabled="disabled"
          />
        </div>
      </Card>
      {activated === true ? (
        <></>
      ) : (
        <>
          <div className={styles.postButton}>
            <Button text="Update Profile" onClick={navToProfile} />
          </div>
        </>
      )}

      <div className={styles.postButton}>
        <Button text="Post a project" onClick={changeToPost} />
      </div>
      {isAddPost ? <AddPost /> : <></>}
      <hr />
      <FeedCard profile={false} />
      <hr />
      {/* <FeedCard />
      <hr /> */}
    </div>
  );
};

export default Feeds;
