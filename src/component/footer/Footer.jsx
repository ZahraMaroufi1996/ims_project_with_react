import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div id="time-box">
        <div id="time-content">
          <span>Server Time</span>
          <span id="local-time">21.04.17</span>
          <span id="global-time"> 18:42:23</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
