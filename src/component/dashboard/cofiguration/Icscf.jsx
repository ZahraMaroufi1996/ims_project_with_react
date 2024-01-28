import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Axios from "axios";
import classes from "./Icscf.module.css";
import { InputComponent } from "./InputComponent";
import classNames from "classnames";

const Icscf = () => {
  const { register } = useFormContext();
  return (
    <div
      className={classNames(
        classes["I-CSCF-class"],
        "d-flex",
        "justify-content-around ",
        "align-items-center"
      )}
    >
      <span className={classNames(classes["I-CSCF-class-content-title"])}>
        I-CSCF
      </span>

      <div
        className={classNames(
          classes["I-CSCF-class-content-input"],
          "d-flex",
          "justify-content-between ",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"Shared Memory*"}
          id={"icscf-shared-memory"}
          name={"i_shared_memory"}
          className={classes["memory"]}
          unit={"MB"}
          {...register("i_shared_memory")}
        />
      </div>

      <div
        className={classNames(
          classes["I-CSCF-class-content-input"],
          "d-flex",
          "justify-content-between ",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"Private Memory*"}
          id={"icscf-private-memory"}
          name={"i_private_memory"}
          className={classes["memory"]}
          unit={"MB"}
          {...register("i_private_memory")}
        />
      </div>
    </div>
  );
};

export { Icscf };
