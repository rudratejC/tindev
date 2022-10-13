import React from "react";
import styles from "./Sidebar.module.css";
import { Icon } from "web3uikit";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../../defaultimgs";
import Navigation from "../Shared/Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Shared/Button/Button";

const Sidebar = () => {
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  console.log(user);

  return (
    <div className={styles.sidebar}>
      <div>
        <Link to="/feeds" className={styles.menuItems}>
          <img
            src="/assets/images/feeds.svg"
            alt="feeds"
            className={styles.svgIcon}
          />
          <p>Feeds</p>
        </Link>
        <Link to="/feeds" className={styles.menuItems}>
          <img
            src="/assets/images/idCard.svg"
            alt="feeds"
            className={styles.svgIcon}
          />
          <p>My Profile</p>
        </Link>
        <Link to="/profile" className={styles.menuItems}>
          <img
            src="/assets/images/chats.svg"
            alt="feeds"
            className={styles.svgIcon}
          />
          <p>Chats</p>
        </Link>
        <Link to="/feeds" className={styles.menuItems}>
          <img
            src="/assets/images/code-editor.svg"
            alt="feeds"
            className={styles.svgIcon}
          />
          <p>Editor</p>
        </Link>
      </div>
      <Button
        className={styles.logout}
        text="Logout"
        onClick={() => {
          Moralis.User.logOut().then(() => {
            window.location.reload();
          });
        }}
      />
    </div>
  );
};

export default Sidebar;

// <div className={styles.sidebar}>
//       <div className={styles.siderContent}>
//         <div className={styles.menu}>
//           <Link to="/" className={styles.link}>
//             <div className={styles.menuItems}>TinDev</div>
//           </Link>

// <Link to="/" className={styles.link}>
//   <div className={styles.menuItems}>
//     <Icon fill="#ffffff" size={33} svg="list" />
//     Home
//   </div>
// </Link>

// <Link to="/profile" className={styles.link}>
//   <div className={styles.menuItems}>
//     <Icon fill="#ffffff" size={33} svg="user" />
//     Profile
//   </div>
// </Link>

// <Link to="/settings" className={styles.link}>
//   <div className={styles.menuItems}>
//     <Icon fill="#ffffff" size={33} svg="cog" />
//     Settings
//   </div>
// </Link>
//         </div>

//         <div className={styles.details}>
//           <img
//             src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}
//             className={styles.profilePic}
//           ></img>
//           <div className={styles.profile}>
//             <div className={styles.who}>
//               {user.attributes.username.slice(0, 6)}
//             </div>
//             <div className={styles.accWhen}>
//               {user.attributes.ethAddress
//                 ? `${user.attributes.ethAddress.slice(
//                     0,
//                     4
//                   )}...${user.attributes.ethAddress.slice(38)}`
//                 : user.id}
//             </div>
//             <div
//               className="logout"
//               onClick={() => {
//                 Moralis.User.logOut().then(() => {
//                   window.location.reload();
//                 });
//               }}
//             >
//               Logout
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
