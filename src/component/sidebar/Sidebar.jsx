import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="sidebar-account-info d-flex flex-column justify-content-around align-items-center">
        <img class="sidebar-account-info-image" src="images/img1.svg" />
        <div class="sidebar-account-info-name d-flex flex-column justify-content-between align-items-center">
          <span class="sidebar-account-info-Saleh-username text-center">
            Saleh Zekavati
          </span>
          <span class="sidebar-account-info-username text-center">
            username
          </span>
        </div>
      </div>

      <div class="sidebar-topology-icon d-flex justify-content-center align-items-center">
        <a
          href="IMS_Topology.html"
          class="sidebar-topology-icon-content d-flex flex-row justify-content-center align-items-center"
        >
          <img class="sidebar-image" src="images/Menu Icon _ Topology.svg" />
          <span>TOPOLOGY</span>
        </a>
      </div>

      <div class="sidebar-configuration-icon d-flex justify-content-center align-items-center">
        <a
          href="IMS_Configuration.html"
          class="sidebar-configuration-icon-content d-flex justify-content-center align-items-center"
        >
          <img
            class="sidebar-configuration-icon-image"
            src="images/Menu Icon _ Config.svg"
          />
          <span>CONFIGURATION</span>
        </a>
      </div>

      <div class="sidebar-monitoring-icon d-flex justify-content-center align-items-center">
        <a class="sidebar-monitoring-icon-content d-flex justify-content-center align-items-center">
          <img class="sidebar-image" src="images/Group 8329.svg" />
          <span>MONITORING</span>
        </a>
      </div>

      <div class="sidebar-troubleshooting-icon d-flex justify-content-center align-items-center">
        <a
          href="IMS_Troubleshooting.html"
          class="sidebar-troubleshooting-icon-content d-flex justify-content-center align-items-center"
        >
          <img class="sidebar-image" src="images/Group 8332.svg" />
          <span>TROUBLESHOOTING</span>
        </a>
      </div>
      <button class="sidebar-button">Save & Restart</button>
      <div class="sidebar-logo">
        <img src="images/IMS_TOPOLOGY_images/Group 8498.svg" />
      </div>
    </div>
  );
};

export default Sidebar;
