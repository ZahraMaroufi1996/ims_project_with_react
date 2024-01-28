import React, { useState } from "react";
import { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = forwardRef(
  ({ title, id, name, className, unit, ...rest }, ref) => {
    // const { register } = useFormContext();

    return (
      <>
        {title ? <label for={id}>{title}</label> : ""}
        <input
          className={classNames(className)}
          id={id}
          type="text"
          ref={ref}
          name={name}
          {...rest}
          onChange={(e) => {
            rest.onChange(e);
          }}
        />
        {unit ? <span>MB</span> : ""}
      </>
    );
  }
);

export { InputComponent };
