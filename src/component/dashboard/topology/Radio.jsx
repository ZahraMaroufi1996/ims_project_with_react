import React, { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Radio.module.css";
import classNames from "classnames";

const Radio = forwardRef(({ title, id, name, className, ...rest }, ref) => {
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
        className={classNames(classes["chb"], classes["chb-1-circle"])}
        type="radio"
        id={id}
        name={name}
        // disabled
      />
      <label for={id} className={classNames(classes["radio-label"])}>
        {title}
      </label>
    </div>
  );
});

export { Radio };
