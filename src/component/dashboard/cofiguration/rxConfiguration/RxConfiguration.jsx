import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
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
        classes["P-CSCF-class-Rx-configuration"],
        "d-flex",
        "flex-column",
        "justify-content-around",
        "align-items-center"
      )}
    >
      <div className={classNames("d-flex", "align-item-center")}>
        <span
          className={classNames(classes["P-CSCF-class-Rx-configuration-title"])}
        >
          Rx Configuration
        </span>
        <IpInput
          title={"PCRF IP Address"}
          className={classes["P-CSCF-class-Rx-configuration-field1"]}
          onChange={onChange}
        />
      </div>
      <div
        className={classNames(
          classes["P-CSCF-class-Rx-configuration-field2"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"PCRF FQDN*"}
          name={"PCRF_FQDN"}
          id={"Rx-configuration-field2"}
          className={classes["rx-configuration-box"]}
          type={"text"}
          {...register("PCRF_FQDN", {
            required: "وارد کردن این فیلد اجباری است",
          })}
          isError={Boolean(errors?.PCRF_FQDN)}
          errorMessage={errors?.PCRF_FQDN?.message}
        />
      </div>

      <div
        className={classNames(
          classes["P-CSCF-class-Rx-configuration-field3"],
          "d-flex",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"PCRF Realm*"}
          name={"PCRF_Realm"}
          id={"Rx-configuration-field3"}
          className={classes["rx-configuration-box"]}
          type={"text"}
          {...register("PCRF_Realm", {
            required: "وارد کردن این فیلد اجباری است",
          })}
          isError={Boolean(errors?.PCRF_Realm)}
          errorMessage={errors?.PCRF_Realm?.message}
        />
      </div>

      <div
        className={classNames(
          classes["P-CSCF-class-Rx-configuration-field4"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <span>Transport Protocol</span>

        <Radio
          {...register(`Transport_Protocol`)}
          title={"SCTP"}
          id={"Transport-Protocol-type-1"}
          name={"Transport_Protocol"}
          value={"SCTP"}
          className={classes["transport-protocol"]}
        />
        <Radio
          {...register(`Transport_Protocol`)}
          title={"TCP"}
          id={"Transport-Protocol-type-2"}
          name={"Transport_Protocol"}
          value={"TCP"}
          className={classes["transport-protocol"]}
        />
      </div>

      <div
        className={classNames(
          classes["P-CSCF-class-Rx-configuration-field5"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <Switch
          title={"Rx Source Port"}
          id={"Enable-Rx-Source-Port"}
          name={"Enable_Rx_Source_Port"}
          {...register("Enable_Rx_Source_Port")}
          className={classes["P-CSCF-class-Rx-configuration-field5-switch"]}
        />
        <InputComponent
          name={"Rx_Source_Port"}
          id={"Rx-Source-Port"}
          className={classes["Rx-Source-Port"]}
          type={"number"}
          {...register("Rx_Source_Port", {
            required: "وارد کردن این فیلد اجباری است",
            min: {
              value: 1000,
              message: "مقدار این فیلد باید حداقل 1000 باشد",
            },
          })}
          isError={Boolean(errors?.Rx_Source_Port)}
          errorMessage={errors?.Rx_Source_Port?.message}
        />
      </div>
    </div>
  );
};

export { RxConfiguration };