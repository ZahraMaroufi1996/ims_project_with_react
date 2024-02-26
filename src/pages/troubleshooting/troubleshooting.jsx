import React from "react";
import classes from "./troubleshooting.module.css";
import classNames from "classnames";
import { PingElement } from "../../component/dashboard/troubleshooting/ping/PingElement";
import { PacketElement } from "../../component/dashboard/troubleshooting/packet/PacketElement";

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
        <PingElement />
      </div>

      <div
        className={classNames(classes["main-content"], "d-flex", "flex-column")}
      >
        <PacketElement />
      </div>
    </div>
  );
};

export default Troubleshooting;
