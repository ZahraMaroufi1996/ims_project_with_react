import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Axios from "axios";
import classes from "./Scscf.module.css";
import { InputComponent } from "../input/InputComponent";
import classNames from "classnames";

const Scscf = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={classNames(
        classes["S-CSCF-class"],
        "d-flex",
        "justify-content-center ",
        "align-items-center"
      )}
    >
      <div
        className={classNames(
          classes["S-CSCF-class-content"],
          "d-flex",
          "justify-content-between ",
          "flex-column"
        )}
      >
        <div className={classNames("d-flex", "justify-content-between")}>
          <span className={classNames(classes["S-CSCF-class-content-title"])}>
            S-CSCF
          </span>

          <div
            className={classNames(
              classes["S-CSCF-class-content-input12"],
              "d-flex",
              "justify-content-between ",
              "align-items-center"
            )}
          >
            <div
              className={classNames(
                classes["S-CSCF-class-content-input1"],
                "d-flex",
                "justify-content-between ",
                "align-items-center"
              )}
            >
              <InputComponent
                title={"Minimum Register Time"}
                id={"Minimum-Register-Time"}
                name={"Minimum_Register_Time"}
                className={classes["register-time"]}
                unit={"S"}
                {...register("Minimum_Register_Time")}
                type={"number"}
                {...register("Minimum_Register_Time", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10,
                    message: "مقدار این فیلد باید حداقل 10 باشد",
                  },
                })}
                isError={Boolean(errors?.Minimum_Register_Time)}
                errorMessage={errors?.Minimum_Register_Time?.message}
              />
            </div>

            <div
              className={classNames(
                classes["S-CSCF-class-content-input2"],
                "d-flex",
                "justify-content-between ",
                "align-items-center"
              )}
            >
              <InputComponent
                title={"Maximum Register Time"}
                id={"Maximum-Register-Time"}
                name={"Maximum_Register_Time"}
                className={classes["register-time"]}
                unit={"S"}
                type={"number"}
                {...register("Maximum_Register_Time", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 30,
                    message: "مقدار این فیلد باید حداقل 30 باشد",
                  },
                })}
                isError={Boolean(errors?.Maximum_Register_Time)}
                errorMessage={errors?.Maximum_Register_Time?.message}
              />
            </div>
          </div>
        </div>

        <div
          className={classNames(
            classes["S-CSCF-class-content-input34"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <div
            className={classNames(
              classes["S-CSCF-class-content-input3"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              title={"Shared Memory*"}
              id={"scscf-shared-memory"}
              name={"s_shared_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("s_shared_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.s_shared_memory)}
              errorMessage={errors?.s_shared_memory?.message}
            />
          </div>

          <div
            className={classNames(
              classes["S-CSCF-class-content-input4"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              title={"Private Memory*"}
              id={"scscf-private-memory"}
              name={"s_private_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("s_private_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.s_private_memory)}
              errorMessage={errors?.s_private_memory?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Scscf };
