import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./RxConfiguration.module.css";
import classNames from "classnames";
import { InputComponent } from "../input/InputComponent";
import { IpInput } from "../../topology/ipInput";
import { Checkbox } from "../checkbox/Checkbox";
import { Radio } from "../../topology/radio/Radio";
import { Switch } from "../switch/Switch";

const RxConfiguration = ({ onChange }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [pcrfIpAddress, setPcrfIpAddress] = useState("");

  const handleOnChangeIpAddress = (value) => {
    setPcrfIpAddress(value);
  };

  return (
    <div
      className={classNames(
        classes["pcscf-rx-configuration"],
        "d-flex",
        "flex-column",
        "justify-content-around",
        "align-items-center"
      )}
    >
      <div className={classNames("d-flex", "align-item-center")}>
        <span className={classNames(classes["pcscf-rx-configuration-title"])}>
          Rx Configuration
        </span>
        <IpInput
          title={"PCRF IP Address"}
          className={classes["pcscf-rx-configuration-pcrf-ip"]}
          onChange={onChange}
        />
      </div>
      <div
        className={classNames(
          classes["pcscf-rx-configuration-pcrf-fqdn"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"PCRF FQDN*"}
          name={"pcrf_fqdn"}
          id={"rx-configuration-pcrf-fqdn"}
          className={classes["rx-configuration-box"]}
          type={"text"}
          {...register("pcrf_fqdn", {
            required: "وارد کردن این فیلد اجباری است",
          })}
          isError={Boolean(errors?.pcrf_fqdn)}
          errorMessage={errors?.pcrf_fqdn?.message}
        />
      </div>

      <div
        className={classNames(
          classes["pcscf-rx-configuration-pcrf-realm"],
          "d-flex",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"PCRF Realm*"}
          name={"pcrf_realm"}
          id={"rx-configuration-pcrf-realm"}
          className={classes["rx-configuration-box"]}
          type={"text"}
          {...register("pcrf_realm", {
            required: "وارد کردن این فیلد اجباری است",
          })}
          isError={Boolean(errors?.pcrf_realm)}
          errorMessage={errors?.pcrf_realm?.message}
        />
      </div>

      <div
        className={classNames(
          classes["pcscf-rx-configuration-protocol"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <span>Transport Protocol</span>

        <Radio
          {...register(`transport_protocol`)}
          title={"SCTP"}
          id={"transport-protocol-sctp"}
          name={"transport_protocol"}
          value={"SCTP"}
          className={classes["transport-protocol"]}
        />
        <Radio
          {...register(`transport_protocol`)}
          title={"TCP"}
          id={"transport-protocol-tcp"}
          name={"transport_protocol"}
          value={"TCP"}
          className={classes["transport-protocol"]}
        />
      </div>

      <div
        className={classNames(
          classes["pcscf-rx-configuration-port"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <Switch
          title={"Rx Source Port"}
          id={"enable-rx-source-port"}
          name={"enable_rx_source_port"}
          {...register("enable_rx_source_port")}
          className={classes["pcscf-rx-configuration-port-switch"]}
        />
        <InputComponent
          name={"rx_source_port"}
          id={"rx-source-port"}
          className={classes["rx-source-port"]}
          type={"number"}
          {...register("rx_source_port", {
            required: "وارد کردن این فیلد اجباری است",
            min: {
              value: 1000,
              message: "مقدار این فیلد باید حداقل 1000 باشد",
            },
          })}
          isError={Boolean(errors?.rx_source_port)}
          errorMessage={errors?.rx_source_port?.message}
        />
      </div>
    </div>
  );
};

export { RxConfiguration };
