import React, { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Checkbox.module.css";
import classNames from "classnames";

const Checkbox = forwardRef(({ title, id, name, className, ...rest }, ref) => {
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
        className={classNames(classes["chb"], classes["chb-1"])}
        type="checkbox"
        id={id}
        name={name}
        // disabled
      />
      <label for={id} className={classNames(classes["checkbox-label"])}>
        {title}
      </label>
    </div>
  );
});

export { Checkbox };
