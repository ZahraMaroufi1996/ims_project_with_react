import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { forwardRef } from "react";
import Axios from "axios";
import classes from "./Switch.module.css";
import classNames from "classnames";
import { InputComponent } from "../input/InputComponent";

const Switch = forwardRef(({ className, title, id, name, ...rest }, ref) => {
  // const { register } = useFormContext();
  return (
    <div
      className={classNames(
        // classes["P-CSCF-class-content-field1"],
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
