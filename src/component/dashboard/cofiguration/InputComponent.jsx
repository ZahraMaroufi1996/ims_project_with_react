import React, { useState } from "react";
import { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = forwardRef(
  (
    { type, isError, errorMessage, title, id, name, className, unit, ...rest },
    ref
  ) => {
    return (
      <>
        {title ? <label for={id}>{title}</label> : ""}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <input
            className={classNames(
              classes["input"],
              className,
              `form-control${isError ? " is-invalid" : ""}`
            )}
            id={id}
            type={type}
            ref={ref}
            name={name}
            {...rest}
            onChange={(e) => {
              rest.onChange(e);
            }}
          />
          {isError && (
            <div
              style={{ top: 30, left: 0, position: "absolute" }}
              className="invalid-feedback"
            >
              {errorMessage}
            </div>
          )}
        </div>
        {unit ? (
          <span className={classNames(classes["unit"])}>{unit}</span>
        ) : (
          ""
        )}
      </>
    );
  }
);

export { InputComponent };
