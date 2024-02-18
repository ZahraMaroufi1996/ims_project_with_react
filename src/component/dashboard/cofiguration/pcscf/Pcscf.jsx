import React, { useState } from "react";
import Axios from "axios";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";

import classes from "./Pcscf.module.css";
import { Switch } from "../switch/Switch";
import { Checkbox } from "../checkbox/Checkbox";
import { RxConfiguration } from "../rxConfiguration/RxConfiguration";
import classNames from "classnames";
import { InputComponent } from "../input/InputComponent";

const Pcscf = ({ onChange }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
              type={"number"}
              {...register("p_shared_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.p_shared_memory)}
              errorMessage={errors?.p_shared_memory?.message}
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
              type={"number"}
              {...register("p_private_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.p_private_memory)}
              errorMessage={errors?.p_private_memory?.message}
            />
          </div>
        </div>
      </div>
      <RxConfiguration onChange={onChange} />
    </div>
  );
};

export { Pcscf };
