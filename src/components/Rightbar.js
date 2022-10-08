import React from "react";
import "./Rightbar.css";
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";

const Rightbar = () => {
  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Devs...."
          name="Search Devs...."
          prefixIcon="search"
          labelBgColor="#141d26"
        ></Input>
        {/* <div className="trends">
      News For You
      {trends.map((e) => {
          return(
            <>
            <div className="trend" onClick={() => window.open(e.link)}>
              <img src={e.img} className="trendImg"></img>
              <div className="trendText">{e.text}</div>
            </div>
            </>
          )
      })}
    </div> */}
        <div className="menuItems">Recent Chats</div>
      </div>
    </>
  );
};

export default Rightbar;
