import React from "react";
import classes from "./MyButton.module.css";
import classNames from "classnames";

const MyButton = ({ title, className }) => {
  return (
    <button
      type="submit"
      className={classNames(className, classes["ims-button"])}
    >
      {title}
    </button>
  );
};

export { MyButton };
