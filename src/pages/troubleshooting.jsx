import React from "react";
import classes from "./troubleshooting.module.css";
import classNames from "classnames";
import { LeftElement } from "../component/dashboard/troubleshooting/LeftElement";
import { RightElement } from "../component/dashboard/troubleshooting/RightElement";

// import { TopologyIcon } from "../icons/TopologyIcon";

const Troubleshooting = () => {
  return (
    <div className={classNames("d-flex")}>
      <div
        className={classNames(
          classes["main-content"],
          "d-flex",
          "justify-content-center",
          "align-items-center"
        )}
      >
        <LeftElement />
      </div>

      <div
        className={classNames(classes["main-content"], "d-flex", "flex-column")}
      >
        <RightElement />
      </div>
    </div>
  );
};

export default Troubleshooting;
