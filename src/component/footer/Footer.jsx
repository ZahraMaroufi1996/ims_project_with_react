import React from "react";
import classes from "./Footer.module.css";
import classNames from "classnames";

const Footer = () => {
  return (
    <div className={classNames(classes["footer"])}>
      <div className={classNames(classes["time-box"])}>
        <div className={classNames(classes["time-content"])}>
          <span>Server Time</span>
          <span id="local-time">21.04.17</span>
          <span id="global-time"> 18:42:23</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
