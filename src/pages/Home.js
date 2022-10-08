import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon, Input } from "web3uikit";
import { useState, useRef } from "react";
import ProjectInFeed from "../components/ProjectInFeed";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const Home = () => {
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  const contractProcessor = useWeb3ExecuteFunction();

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [theFile, setTheFile] = useState();
  //const [tweet, setTweet] = useState();
  const [project, setProject] = useState();
  const [skill, setSkill] = useState();

  // async function maticTweet() {
  //   if (!tweet) return;

  //   let img;
  //   if (theFile) {
  //     const data = theFile;
  //     const file = new Moralis.File(data.name, data);
  //     await file.saveIPFS();
  //     img = file.ipfs();
  //   } else {
  //     img = "No Img";
  //   }

  //   let options = {
  //     contractAddress: "0x8E452D8573e2B1e8341D3f4aCC07939247cf99c6",
  //     functionName: "addTweet",
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "tweetTxt",
  //             type: "string",
  //           },
  //           {
  //             internalType: "string",
  //             name: "tweetImg",
  //             type: "string",
  //           },
  //         ],
  //         name: "addTweet",
  //         outputs: [],
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //     ],
  //     params: {
  //       tweetTxt: tweet,
  //       tweetImg: img,
  //     },
  //     msgValue: Moralis.Units.ETH(1),
  //   };

  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       saveProject();
  //     },
  //     onError: (error) => {
  //       console.log(error.data.message);
  //     },
  //   });
  // }

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
    let arr = ["React", "Firebase"];
    newProject.set("array", arr);
    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      //newProject.set("tweetImg", file.ipfs());
      newProject.set("img", file.ipfs());
    }

    await newProject.save();
    window.location.reload();
  }

  const onImageClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  return (
    <>
      <div className="pageIdentify">Home</div>
      <div className="mainContent">
        <div className="profileTweet">
          <img
            src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}
            className="profilePic"
          ></img>
          <div className="tweetBox">
            <TextArea
              label="Project Description"
              name="tweetTxtArea"
              type="text"
              onChange={(e) => setProject(e.target.value)}
              width="95%"
            ></TextArea>
            <TextArea
              label="Add skills"
              name="tweetTxtArea"
              type="text"
              onChange={(e) => setSkill(e.target.value)}
              width="20%"
            ></TextArea>
            {/* //todo skill button add */}
            {selectedFile && (
              <img src={selectedFile} className="tweetImg"></img>
            )}
            <div className="imgOrTweet">
              <div className="imgDiv" onClick={onImageClick}>
                <input
                  type="file"
                  name="file"
                  ref={inputFile}
                  onChange={changeHandler}
                  style={{ display: "none" }}
                />
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
              </div>

              <div className="tweetOptions">
                <div className="tweet" onClick={saveProject}>
                  Post
                </div>
                <div
                  className="tweet"
                  //onClick={maticTweet}
                  style={{ backgroundColor: "#8247e5" }}
                >
                  <Icon fill="#ffffff" size={20} svg="matic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectInFeed profile={false} />
      </div>
    </>
  );
};

export default Home;
