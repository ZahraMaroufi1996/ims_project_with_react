import React from "react";
import { forwardRef } from "react";
import classes from "./Switch.module.css";
import classNames from "classnames";

const Switch = forwardRef(({ className, title, id, name, ...rest }, ref) => {
  return (
    <div
      className={classNames(
        className,
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      <label className={classNames(classes["switch"])}>
        <input
          type="checkbox"
          {...rest}
          onChange={(e) => {
            rest.onChange(e);
          }}
          name={name}
          id={id}
          ref={ref}
        />
        <span
          className={classNames(classes["slider"], classes["round"])}
        ></span>
      </label>
    </div>
  );
});

export { Switch };
