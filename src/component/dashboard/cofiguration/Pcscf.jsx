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

const Pcscf = () => {
  const { register } = useFormContext();
  const { General_type_icon1 } = useWatch();

  console.log({ General_type_icon1 });

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
        <Switch
          title={"Enable TLS"}
          id={"ipsec"}
          name={"Enable_IPsec"}
          // className={classes["P-CSCF-class-content-field1"]}
        />

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
              type={"checkbox"}
              title={"AES-CBC"}
              id={"Encryption-Algorithm-type-1"}
              name={"Encryption_Algorithm_type_icon1"}
              className={classes["P-CSCF-class-content-field2-checkbox1"]}
            />
            <Checkbox
              {...register("Encryption_Algorithm_type_icon2")}
              type={"checkbox"}
              title={"DES-EDE3-CBC"}
              id={"Encryption-Algorithm-type-2"}
              name={"Encryption_Algorithm_type_icon2"}
              className={classes["P-CSCF-class-content-field2-checkbox2"]}
            />
            <Checkbox
              {...register("Encryption_Algorithm_type_icon3")}
              type={"checkbox"}
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
          className={"P-CSCF-class-content-field3"}
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
              type={"number"}
              id={"pcscf-shared-memory"}
              name={"p_shared_memory"}
              className={classes["memory"]}
              unit={"MB"}
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
            />
          </div>
        </div>
      </div>
      <RxConfiguration />
    </div>
  );
};

export { Pcscf };
