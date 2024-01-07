import React, { useState } from "react";
import Axios from "axios";
import classes from "./Switch.module.css";
import classNames from "classnames";
import { InputComponent } from "./InputComponent";

const Switch = ({ title, id, name, className, flag }) => {
  return (
    <div
      className={classNames(
        classes[className],
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      <label className={classNames(classes["switch"])}>
        <input type="checkbox" name={name} id={id} disabled />
        <span
          className={classNames(classes["slider"], classes["round"])}
        ></span>
      </label>
      {flag === 1 ? (
        <input
          type="text"
          id="Rx-Source-Port"
          className={classNames(classes["Rx-Source-Port"])}
          name="Rx_Source_Port"
          disabled
        />
      ) : flag === 2 ? (
        <input
          type="text"
          id="Rx-Source-Port"
          className={classNames(classes["Rx-Source-Port"])}
          name="Rx_Source_Port"
          disabled
        />
      ) : (
        ""
      )}
    </div>
  );
};

export { Switch };
