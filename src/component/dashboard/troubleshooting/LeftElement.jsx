import React, { useState } from "react";
import Axios from "axios";
import classes from "./LeftElement.module.css";
import classNames from "classnames";
import { SelectComponent } from "./SelectComponent";
import { IpInput } from "../topology/ipInput";

const LeftElement = () => {
  return (
    <div
      className={classNames(
        classes["main-content-left-side"],
        "d-flex",
        "justify-content-between",
        "flex-column"
      )}
    >
      <span className={classNames(classes["left-side-content-title"])}>
        Ping
      </span>

      <div className={classNames("d-flex", "flex-column")}>
        <div
          className={classNames(
            "d-flex",
            "justify-content-between",
            "align-items-start"
          )}
        >
          <div
            className={classNames(
              classes["node"],
              "d-flex",
              "align-items-center"
            )}
          >
            <SelectComponent />
          </div>
          <div
            className={classNames("d-flex", "flex-column", "align-items-end")}
          >
            <IpInput title={"IP address"} className={classes["ip-address"]} />

            <button
              className={classNames(
                classes["run-button"],
                classes["ims-button"]
              )}
            >
              Run
            </button>
          </div>
        </div>
        <div
          className={classNames(
            classes["command-result"],
            "d-flex",
            "flex-column"
          )}
        >
          <span className={classNames(classes["command-result-title"])}>
            Command result
          </span>
          <div className={classNames(classes["command-result-content"])}></div>
        </div>
      </div>
    </div>
  );
};

export { LeftElement };
