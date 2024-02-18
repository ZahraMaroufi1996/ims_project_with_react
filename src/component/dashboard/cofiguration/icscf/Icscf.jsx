import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Axios from "axios";
import classes from "./Icscf.module.css";
import { InputComponent } from "../input/InputComponent";
import classNames from "classnames";

const Icscf = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          classes["I-CSCF-class-content-inputs"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
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
            type={"number"}
            {...register("i_shared_memory", {
              required: "وارد کردن این فیلد اجباری است",
              min: {
                value: 5,
                message: "مقدار این فیلد باید حداقل 5 باشد",
              },
            })}
            isError={Boolean(errors?.i_shared_memory)}
            errorMessage={errors?.i_shared_memory?.message}
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
            type={"number"}
            {...register("i_private_memory", {
              required: "وارد کردن این فیلد اجباری است",
              min: {
                value: 5,
                message: "مقدار این فیلد باید حداقل 5 باشد",
              },
            })}
            isError={Boolean(errors?.i_private_memory)}
            errorMessage={errors?.i_private_memory?.message}
          />
        </div>
      </div>
    </div>
  );
};

export { Icscf };
