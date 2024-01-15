import React, { useState } from "react";
import Axios from "axios";
import classes from "./RightElement.module.css";
import { SelectComponent } from "./SelectComponent";
import { InputComponent } from "../cofiguration/InputComponent";
import classNames from "classnames";
import { MyButton } from "../cofiguration/MyButton";

const RightElement = () => {
  return (
    <>
      <span className={classNames(classes["right-side-content-title"])}>
        Packet Capture : tcpdump
      </span>
      <div className={classNames("d-flex")}>
        <div
          className={classNames(
            classes["node"],
            "d-flex",
            "align-items-center"
          )}
        >
          <SelectComponent title={"Node"} replace={"Select Node"} />
        </div>
        <div
          className={classNames(
            classes["interface"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <SelectComponent title={"Interface"} replace={"any"} />
        </div>
      </div>
      <div className={classNames("d-flex")}>
        <div
          className={classNames(
            classes["option"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <label class="">Options</label>
          <input
            type="text"
            name="trou_option_name"
            className={classNames(classes["node-option-box"])}
          />
          {/* <InputComponent
            title={"Options"}
            name={"trou_option_name"}
            id={"222"}
            className={"node-option-box"}
          /> */}
        </div>
        <MyButton title={"Start"} className={classes["start-button"]} />
      </div>
    </>
  );
};

export { RightElement };
