import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Switch.module.css";
import classNames from "classnames";
import { InputComponent } from "./InputComponent";

const Switch = ({ title, id, name, flag }) => {
  const { register } = useFormContext();
  return (
    <div
      className={classNames(
        classes["P-CSCF-class-content-field1"],
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      <label className={classNames(classes["switch"])}>
        <input type="checkbox" {...register(`${name}`)} name={name} id={id} />
        <span
          className={classNames(classes["slider"], classes["round"])}
        ></span>
      </label>
      {/* {flag === 1 ? (
        <input
          type="text"
          id="Rx-Source-Port"
          className={classNames(classes["Rx-Source-Port"])}
          name="Rx_Source_Port"
          disabled
        />
      ) : flag === 2 ? (
        <input
          type="text"
          id="Rx-Source-Port"
          className={classNames(classes["Rx-Source-Port"])}
          name="Rx_Source_Port"
          disabled
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export { Switch };
