import React, { useState } from "react";
import Axios from "axios";
import classes from "./General.module.css";
import { Checkbox } from "./Checkbox";
import { InputComponent } from "./InputComponent";
import classNames from "classnames";

const General = () => {
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
              title={"IMS Domain*"}
              id={"ims-domain"}
              name={"IMS_Domain"}
              className={classes["general-class-content-field1-box"]}
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
          <span>Enable Homer In :</span>
          <div
            className={classNames(
              classes["general-class-content-field2-checkboxes"],
              "d-flex",
              "justify-content-around",
              "align-items-center"
            )}
          >
            <Checkbox
              type={"checkbox"}
              title={"P-CSCF"}
              id={"General-type-1"}
              name={"General-type-icon1"}
              value={"p_cscf"}
              className={classes["general-class-content-field2-checkbox"]}
            />
            <Checkbox
              type={"checkbox"}
              title={"S-CSCF"}
              id={"General-type-2"}
              name={"General-type-icon2"}
              value={"s_cscf"}
              className={classes["general-class-content-field2-checkbox"]}
            />
            <Checkbox
              type={"checkbox"}
              title={"I-CSCF"}
              id={"General-type-3"}
              name={"General-type-icon3"}
              value={"i_cscf"}
              className={classes["general-class-content-field2-checkbox"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { General };
