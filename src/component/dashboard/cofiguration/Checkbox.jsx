import React, { useState } from "react";
import Axios from "axios";
import classes from "./Checkbox.module.css";
import classNames from "classnames";

const Checkbox = ({ title, id, name, value, className, type }) => {
  return (
    <div
      className={classNames(
        classes[className],
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <input
        className={classNames(
          classes["chb"],
          classes["chb-1-circle"]
          // classes[`{ type ==="radio"} ? "chb-1-circle" : "chb-1" }`]
        )}
        type={type}
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
