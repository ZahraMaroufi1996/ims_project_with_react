import React from "react";
import classes from "./General.module.css";
import { Checkbox } from "../checkbox/Checkbox";
import { InputComponent } from "../input/InputComponent";
import classNames from "classnames";
import { useFormContext, useWatch } from "react-hook-form";

const General = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classNames(classes["general"])}>
      <div className={classNames(classes["general-content"])}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className={classNames(classes["general-content-title"])}>
            General
          </div>
          <div
            className={classNames(
              classes["general-content-ims-domain"],
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <InputComponent
              {...register("ims_domain", {
                required: "وارد کردن این فیلد اجباری است",
              })}
              title={"IMS Domain*"}
              id={"ims-domain"}
              name={"ims_domain"}
              className={classes["general-content-ims-domain-box"]}
              isError={Boolean(errors?.ims_domain)}
              errorMessage={errors?.ims_domain?.message}
            />
          </div>
        </div>

        <div
          className={classNames(
            classes["general-content-enable-homer"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <span className={classNames(classes["enable-homer-title"])}>
            Enable Homer In :
          </span>

          <Checkbox
            {...register(`enable_homer_pcscf`)}
            title={"P-CSCF"}
            id={"enable-homer-pcscf"}
            name={"enable_homer_pcscf"}
            className={classes["general-content-enable-homer-checkbox"]}
          />

          <Checkbox
            {...register(`enable_homer_scscf`)}
            title={"S-CSCF"}
            id={"enable-homer-scscf"}
            name={"enable_homer_scscf"}
            className={classes["general-content-enable-homer-checkbox"]}
          />
          <Checkbox
            {...register(`enable_homer_icscf`)}
            title={"I-CSCF"}
            id={"enable-homer-icscf"}
            name={"enable_homer_icscf"}
            className={classes["general-content-enable-homer-checkbox"]}
          />
        </div>
      </div>
    </div>
  );
};

export { General };
