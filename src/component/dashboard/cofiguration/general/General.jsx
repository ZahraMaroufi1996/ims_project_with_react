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
    <div className={classNames(classes["general-class"])}>
      <div className={classNames(classes["general-class-content"])}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className={classNames(classes["general-class-content-title"])}>
            General
          </div>
          <div
            className={classNames(
              classes["general-class-content-field1"],
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <InputComponent
              {...register("IMS_Domain", {
                required: "وارد کردن این فیلد اجباری است",
              })}
              title={"IMS Domain*"}
              id={"ims-domain"}
              name={"IMS_Domain"}
              className={classes["general-class-content-field1-box"]}
              isError={Boolean(errors?.IMS_Domain)}
              errorMessage={errors?.IMS_Domain?.message}
            />
          </div>
        </div>

        <div
          className={classNames(
            classes["general-class-content-field2"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <span className={classNames(classes["enable-homer-title"])}>
            Enable Homer In :
          </span>

          <Checkbox
            {...register(`General_type_icon1`)}
            title={"P-CSCF"}
            id={"General_type_1"}
            name={"General_type_icon1"}
            className={classes["general-class-content-field2-checkbox"]}
          />

          <Checkbox
            {...register(`General_type_icon2`)}
            title={"S-CSCF"}
            id={"General-type-2"}
            name={"General_type_icon2"}
            className={classes["general-class-content-field2-checkbox"]}
          />
          <Checkbox
            {...register(`General_type_icon3`)}
            title={"I-CSCF"}
            id={"General-type-3"}
            name={"General_type_icon3"}
            className={classes["general-class-content-field2-checkbox"]}
          />
        </div>
      </div>
    </div>
  );
};

export { General };
