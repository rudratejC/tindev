import { faInfo, faLink, faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import BasicInfo from "../Forms/BasicInfo/BasicInfo";
import Skills from "../Forms/Skills/Skills";
import Social from "../Forms/Social/Social";
import Button from "../Shared/Button/Button";
import IconButton from "../Shared/IconButton/IconButton";
import styles from "./Profile.module.css";

const Components = {
  BasicInfo: "basic_info",
  Social: "social",
  Skills: "skills",
};

const Profile = () => {
  const [component, setComponent] = useState(Components.BasicInfo);

  const tabs = [
    {
      icon: faInfo,
      componentType: Components.BasicInfo,
      //   component: <BasicInfo />,
    },
    {
      icon: faLink,
      componentType: Components.Social,
      //   component: <Social />,
    },
    {
      icon: faTerminal,
      componentType: Components.Skills,
      //   component: <Skills />,
    },
  ];

  return (
    <div className={styles.profile}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <IconButton
            key={tab.component}
            icon={tab.icon}
            className={styles.tab}
            size="2xl"
            selected={component === tab.componentType}
            onClick={() => setComponent(tab.componentType)}
          />
        ))}
      </div>
      {component === Components.BasicInfo && <BasicInfo />}
      {component === Components.Social && <Social />}
      {component === Components.Skills && <Skills />}
    </div>
  );
};

export default Profile;
