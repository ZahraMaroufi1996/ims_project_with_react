import React, { useState } from "react";
import Axios from "axios";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = ({ title, id, name, className, unit }) => {
  return (
    <>
      <label for={id}>{title}</label>
      <input
        className={classNames(classes[className])}
        id={id}
        type="text"
        name={name}
        disabled
      />
      {unit ? <span>MB</span> : ""}
    </>
  );
};

export { InputComponent };
