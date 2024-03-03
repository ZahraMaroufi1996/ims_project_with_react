import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { About } from "../../icons/About";
import { Message } from "../../icons/Message";
import { Sound } from "../../icons/Sound";
import { Profile } from "../../icons/Profile";
import { Logout } from "../../icons/Logout";
import { Exit } from "../../icons/Exit";
import { Help } from "../../icons/Help";
import { Lock } from "../../icons/Lock";
import { LogOutComp } from "../logout/LogOutComp";
import { ProfileComp } from "../profile/ProfileComp";
import classes from "./Toolbar.module.css";
import classNames from "classnames";

const Toolbar = () => {
  const [logOutState, setLogOutState] = useState(false);
  const [profile, setProfile] = useState(false);

  const history = useNavigate();
  const onLogOutConfirm = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  const onProfileConfirm = () => {
    // console.log("hi");
  };

  return (
    <>
      <nav className={classNames(classes["toolbar"])}>
        <div className={classNames(classes["toolbar-nav-content"])}>
          <a href="#">
            <About />
          </a>
          <a href="#">
            <Help />
          </a>
          <a href="#">
            <Message />
          </a>
          <a href="#" id="sound-icon">
            <Sound />
          </a>
          <a href="#">
            <Lock />
          </a>
          <a href="#" id="profile-icon" onClick={() => setProfile(true)}>
            <Profile />
          </a>
          <a href="#" id="log-out-icon" onClick={() => setLogOutState(true)}>
            <Logout />
          </a>
          <a href="#" id="exit-icon">
            <Exit />
          </a>
        </div>
      </nav>
      {logOutState && (
        <LogOutComp
          onClose={() => setLogOutState(false)}
          onConfirm={() => onLogOutConfirm()}
        />
      )}
      {profile && (
        <ProfileComp
          onClose={() => setProfile(false)}
          onConfirm={() => onProfileConfirm()}
        />
      )}
    </>
  );
};

export default Toolbar;
