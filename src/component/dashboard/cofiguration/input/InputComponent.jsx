import React, { useState } from "react";
import { forwardRef } from "react";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = forwardRef(
  (
    { type, isError, errorMessage, title, id, name, className, unit, ...rest },
    ref
  ) => {
    return (
      <div
        className={classNames(
          "w-100",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          {title ? <label for={id}>{title}</label> : ""}
          <input
            className={classNames(
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
              style={{ top: 20, left: 0, position: "absolute" }}
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
      </div>
    );
  }
);

export { InputComponent };
