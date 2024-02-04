import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Axios from "axios";
import classes from "./Scscf.module.css";
import { InputComponent } from "./InputComponent";
import classNames from "classnames";

const Scscf = () => {
  const { register } = useFormContext();
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
                {...register("Maximum_Register_Time")}
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
              {...register("s_shared_memory")}
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
              {...register("s_private_memory")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Scscf };
