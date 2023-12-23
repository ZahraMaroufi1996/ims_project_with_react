import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <nav class="toolbar">
      <div class="toolbar-nav-content">
        <a href="#">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ About.svg" />
        </a>
        <a href="#">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Help.svg" />
        </a>
        <a href="#">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Message.svg" />
        </a>
        <a href="#" id="sound-icon">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Sound.svg" />
        </a>
        <a href="#">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Lock.svg" />
        </a>
        <a href="#" id="profile-icon">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Profile.svg" />
        </a>
        <a href="#" id="log-out-icon">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Log Out.svg" />
        </a>
        <a href="#" id="exit-icon">
          <img src="images/IMS_TOPOLOGY_images/Title Bar Icon _ Exit.svg" />
        </a>
      </div>
    </nav>
  );
};

export default Toolbar;
