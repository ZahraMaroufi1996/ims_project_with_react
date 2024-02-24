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
    <div className={classNames(classes["pcscf"])}>
      <div
        className={classNames(
          classes["pcscf-content"],
          "d-flex",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={classNames("d-flex", "align-item-center")}>
          <span className={classNames(classes["pcscf-content-title"])}>
            P-CSCF
          </span>
          <Switch
            title={"Enable IPsec"}
            id={"ipsec"}
            name={"enable_ipsec"}
            {...register("enable_ipsec")}
            className={classes["pcscf-content-enable-ipsec"]}
          />
        </div>

        <div
          className={classNames(
            classes["pcscf-content-encryption-algorithms"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <p>Supported IPsec Encryption Algorithms :</p>
          <div className="d-flex flex-row justify-content-between">
            <Checkbox
              {...register("encryption_algorithm_aes")}
              title={"AES-CBC"}
              id={"encryption-algorithm-aes"}
              name={"encryption_algorithm_aes"}
              className={
                classes["pcscf-content-encryption-algorithms-aes-checkbox"]
              }
            />
            <Checkbox
              {...register("encryption_algorithm_des")}
              title={"DES-EDE3-CBC"}
              id={"encryption-algorithm-des"}
              name={"encryption_algorithm_des"}
              className={
                classes["pcscf-content-encryption-algorithms-des-checkbox"]
              }
            />
            <Checkbox
              {...register("encryption_algorithm_plain")}
              title={"Plain(No encryption)"}
              id={"encryption-algorithm-plain"}
              name={"encryption_algorithm_plain"}
              className={
                classes["pcscf-content-encryption-algorithms-plain-checkbox"]
              }
            />
          </div>
        </div>

        <Switch
          title={"Enable TLS"}
          id={"tls"}
          name={"enable_tls"}
          className={classes["pcscf-content-enable-tls"]}
          {...register("enable_tls")}
        />

        <div
          className={classNames(
            classes["pcscf-content-memory"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <div className={classNames(classes["pcscf-content-memory-input"])}>
            <InputComponent
              title={"Shared Memory*"}
              id={"pcscf-shared-memory"}
              name={"pcscf_shared_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("pcscf_shared_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.pcscf_shared_memory)}
              errorMessage={errors?.pcscf_shared_memory?.message}
            />
          </div>

          <div className={classNames(classes["pcscf-content-memory-input"])}>
            <InputComponent
              title={"Private Memory*"}
              id={"pcscf-private-memory"}
              name={"pcscf_private_memory"}
              className={classes["memory"]}
              unit={"MB"}
              type={"number"}
              {...register("pcscf_private_memory", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 5,
                  message: "مقدار این فیلد باید حداقل 5 باشد",
                },
              })}
              isError={Boolean(errors?.pcscf_private_memory)}
              errorMessage={errors?.pcscf_private_memory?.message}
            />
          </div>
        </div>
      </div>
      <RxConfiguration onChange={onChange} />
    </div>
  );
};

export { Pcscf };
