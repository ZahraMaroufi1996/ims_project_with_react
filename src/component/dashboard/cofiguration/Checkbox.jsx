import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Checkbox.module.css";
import classNames from "classnames";

const Checkbox = ({ title, id, name, value, className, type }) => {
  const { register } = useFormContext();
  console.log(`${name}`);

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
        className={classNames(
          classes["chb"],
          classes["chb-1-circle"]
          // classes[`{ type ==="radio"} ? "chb-1-circle" : "chb-1" }`]
        )}
        {...register(`${name}`)}
        type={type}
        id={id}
        name={name}
        value={value}
      />
      <label for={id}>{title}</label>
    </div>
  );
};

export { Checkbox };
