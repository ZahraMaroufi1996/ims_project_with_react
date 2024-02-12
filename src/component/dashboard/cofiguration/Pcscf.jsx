import React, { useState } from "react";
import Axios from "axios";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";

import classes from "./Pcscf.module.css";
import { Switch } from "./Switch";
import { Checkbox } from "./Checkbox";
import { RxConfiguration } from "./RxConfiguration";
import classNames from "classnames";
import { InputComponent } from "./InputComponent";

const Pcscf = ({ onChange }) => {
  const { register } = useFormContext();
  // const { General_type_icon1 } = useWatch();
  // console.log(useWatch());

  return (
    <div className={classNames(classes["P-CSCF-class"])}>
      <div
        className={classNames(
          classes["P-CSCF-class-content"],
          "d-flex",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={classNames("d-flex", "align-item-center")}>
          <span className={classNames(classes["P-CSCF-class-content-title"])}>
            P-CSCF
          </span>
          <Switch
            title={"Enable TLS"}
            id={"ipsec"}
            name={"Enable_IPsec"}
            {...register("Enable_IPsec")}
            className={classes["P-CSCF-class-content-field1"]}
          />
        </div>

        <div
          className={classNames(
            classes["P-CSCF-class-content-field2"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <p>Supported IPsec Encryption Algorithms :</p>
          <div className="d-flex flex-row justify-content-between">
            <Checkbox
              {...register("Encryption_Algorithm_type_icon1")}
              title={"AES-CBC"}
              id={"Encryption-Algorithm-type-1"}
              name={"Encryption_Algorithm_type_icon1"}
              className={classes["P-CSCF-class-content-field2-checkbox1"]}
            />
            <Checkbox
              {...register("Encryption_Algorithm_type_icon2")}
              title={"DES-EDE3-CBC"}
              id={"Encryption-Algorithm-type-2"}
              name={"Encryption_Algorithm_type_icon2"}
              className={classes["P-CSCF-class-content-field2-checkbox2"]}
            />
            <Checkbox
              {...register("Encryption_Algorithm_type_icon3")}
              title={"Plain(No encryption)"}
              id={"Encryption-Algorithm-type-3"}
              name={"Encryption_Algorithm_type_icon3"}
              className={classes["P-CSCF-class-content-field2-checkbox3"]}
            />
          </div>
        </div>

        <Switch
          title={"Enable IPsec"}
          id={"tls"}
          name={"Enable_TLS"}
          className={classes["P-CSCF-class-content-field3"]}
          {...register("Enable_TLS")}
        />

        <div
          className={classNames(
            classes["P-CSCF-class-content-field4"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <div
            className={classNames(classes["P-CSCF-class-content-field4-input"])}
          >
            <InputComponent
              title={"Shared Memory*"}
              id={"pcscf-shared-memory"}
              name={"p_shared_memory"}
              className={classes["memory"]}
              unit={"MB"}
              {...register("p_shared_memory")}
            />
          </div>

          <div
            className={classNames(classes["P-CSCF-class-content-field4-input"])}
          >
            <InputComponent
              title={"Private Memory*"}
              id={"pcscf-private-memory"}
              name={"p_private_memory"}
              className={classes["memory"]}
              unit={"MB"}
              {...register("p_private_memory")}
            />
          </div>
        </div>
      </div>
      <RxConfiguration onChange={onChange} />
    </div>
  );
};

export { Pcscf };
