import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./InputComponent.module.css";
import classNames from "classnames";

const InputComponent = ({ title, id, name, className, unit }) => {
  const { register } = useFormContext();
  console.log(`${name}`);

  return (
    <>
      {title ? <label for={id}>{title}</label> : ""}
      <input
        {...register(`${name}`)}
        className={classNames(className)}
        id={id}
        type="text"
        name={name}
      />
      {unit ? <span>MB</span> : ""}
    </>
  );
};

export { InputComponent };
