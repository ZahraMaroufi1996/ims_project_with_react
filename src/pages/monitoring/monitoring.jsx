import React from "react";
import { Performance } from "../../component/icons/Performance";
import classes from "./monitoring.module.css";
import classNames from "classnames";

const monitoring = () => {
  return (
    <div
      className={classNames(
        classes["main-content"],
        "d-flex",
        "align-items-center",
        "justify-content-center "
      )}
    >
      <div
        className={classNames(
          classes["monitoring-content"],
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-center "
        )}
      >
        {/* <img src="images/PERFORMANCE icon.svg" /> */}
        <Performance />
        <p className={classNames(classes["text-center"], "text-center")}>
          Click the button below to display the graphs
        </p>
        <button className={classNames(classes["monitoring-button"])}>
          Start Monitoring
        </button>
      </div>
    </div>
  );
};

export default monitoring;
