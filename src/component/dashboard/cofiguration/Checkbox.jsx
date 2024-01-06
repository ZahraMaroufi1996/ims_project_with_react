import React, { useState } from "react";
import Axios from "axios";
import classes from "./Checkbox.module.css";
import classNames from "classnames";

const Checkbox = ({ title, id, name, value, className }) => {
  return (
    <div
      className={classNames(
        classes[className],
        "d-flex",
        "justify-content-around",
        "align-items-center"
      )}
    >
      <input
        className={classNames(classes["chb"], classes["chb-1"])}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled
      />
      <label for={id}>{title}</label>
    </div>
  );
};

export { Checkbox };
