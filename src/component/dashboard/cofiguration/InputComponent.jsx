import React, { useState } from "react";
import Axios from "axios";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = ({ title, id, name, className }) => {
  return (
    <>
      <label for="ims-domain">{title}</label>
      <input
        className={classNames(classes[className])}
        id={id}
        type="text"
        name={name}
        disabled
      />
      {/* <span>MB</span> */}
    </>
  );
};

export { InputComponent };
