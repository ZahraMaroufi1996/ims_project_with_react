import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
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
        classes["scscf"],
        "d-flex",
        "justify-content-center ",
        "align-items-center"
      )}
    >
      <div
        className={classNames(
          classes["scscf-content"],
          "d-flex",
          "justify-content-between ",
          "flex-column"
        )}
      >
        <div className={classNames("d-flex", "justify-content-between")}>
          <span className={classNames(classes["scscf-content-title"])}>
            S-CSCF
          </span>

          <div
            className={classNames(
              classes["scscf-content-register-time"],
              "d-flex",
              "justify-content-between ",
              "align-items-center"
            )}
          >
            <div
              className={classNames(
                classes["scscf-content-register-time-input"],
                "d-flex",
                "justify-content-between ",
                "align-items-center"
              )}
            >
              <InputComponent
                title={"Minimum Register Time"}
                id={"minimum-register-time"}
                name={"minimum_register_time"}
                className={classes["register-time"]}
                unit={"S"}
                type={"number"}
                {...register("minimum_register_time", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10,
                    message: "مقدار این فیلد باید حداقل 10 باشد",
                  },
                })}
                isError={Boolean(errors?.minimum_register_time)}
                errorMessage={errors?.minimum_register_time?.message}
              />
            </div>

            <div
              className={classNames(
                classes["scscf-content-register-time-input"],
                "d-flex",
                "justify-content-between ",
                "align-items-center"
              )}
            >
              <InputComponent
                title={"Maximum Register Time"}
                id={"maximum-register-time"}
                name={"maximum_register_time"}
                className={classes["register-time"]}
                unit={"S"}
                type={"number"}
                {...register("maximum_register_time", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 30,
                    message: "مقدار این فیلد باید حداقل 30 باشد",
                  },
                })}
                isError={Boolean(errors?.maximum_register_time)}
                errorMessage={errors?.maximum_register_time?.message}
              />
            </div>
          </div>
        </div>

        <div
          className={classNames(
            classes["scscf-content-memory"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <div
            className={classNames(
              classes["scscf-content-memory-input"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              title={"Shared Memory*"}
              id={"scscf-shared-memory"}
              name={"scscf_shared_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("scscf_shared_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.scscf_shared_memory)}
              errorMessage={errors?.scscf_shared_memory?.message}
            />
          </div>

          <div
            className={classNames(
              classes["scscf-content-memory-input"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              title={"Private Memory*"}
              id={"scscf-private-memory"}
              name={"scscf_private_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("scscf_private_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.scscf_private_memory)}
              errorMessage={errors?.scscf_private_memory?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Scscf };
