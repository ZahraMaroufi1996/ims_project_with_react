import React, { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Checkbox.module.css";
import classNames from "classnames";

const Checkbox = forwardRef(
  ({ title, id, name, className, type, ...rest }, ref) => {
    return (
      <div
        className={classNames(
          className,
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <input
          {...rest}
          onChange={(e) => {
            rest.onChange(e);
          }}
          ref={ref}
          className={classNames(
            classes["chb"],
            classes["chb-1-circle"]
            // classes[`{ type ==="radio"} ? "chb-1-circle" : "chb-1" }`]
          )}
          type={type}
          id={id}
          name={name}
          // disabled
        />
        <label for={id}>{title}</label>
      </div>
    );
  }
);

export { Checkbox };
