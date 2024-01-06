import React, { useState } from "react";
import Axios from "axios";
import classes from "./Switch.module.css";
import classNames from "classnames";

const Switch = ({ title, id, name, className }) => {
  return (
    <div
      className={classNames(
        classes[className],
        "d-flex",
        "justify-content-between"
      )}
    >
      <span>{title}</span>
      <label className={classNames(classes["switch"])}>
        <input type="checkbox" name={name} id={id} disabled />
        <span
          className={classNames(classes["slider"], classes["round"])}
        ></span>
      </label>
    </div>
  );
};

export { Switch };
