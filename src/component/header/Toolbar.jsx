import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { About } from "../icons/About";
import { Message } from "../icons/Message";
import { Sound } from "../icons/Sound";
import { Profile } from "../icons/Profile";
import { Logout } from "../icons/Logout";
import { Exit } from "../icons/Exit";
import { Help } from "../icons/Help";
import { Lock } from "../icons/Lock";
import { LogOutComp } from "./LogOutComp";

import "./Toolbar.css";

const Toolbar = () => {
  const [logOutState, setLogOutState] = useState(false);
  const history = useNavigate();
  const onLogOutConfirm = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <>
      <nav class="toolbar">
        <div class="toolbar-nav-content">
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
          <a href="#" id="profile-icon">
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
    </>
  );
};

export default Toolbar;
