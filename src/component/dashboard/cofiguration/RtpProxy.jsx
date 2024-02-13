import React, { useState } from "react";
import Axios from "axios";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";
import classes from "./RtpProxy.module.css";
import { InputComponent } from "./InputComponent";
import { Checkbox } from "./Checkbox";
import { Switch } from "./Switch";

import classNames from "classnames";

const RtpProxy = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={classNames(
        classes["RTP-Proxy-class"],
        "d-flex",
        "align-items-center",
        "justify-content-center"
      )}
    >
      <div
        className={classNames(
          classes["RTP-Proxy-class-content"],
          "d-flex",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={classNames("d-flex", "align-item-center")}>
          <span
            className={classNames(classes["RTP-Proxy-class-content-title"])}
          >
            RTP Proxy
          </span>
          <div
            className={classNames(
              classes["RTP-Proxy-class-content-input1"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <span>Supported HD Codecs :</span>
            <Checkbox
              {...register("Supported_HD_Codecs_type_icon1")}
              title={"G.722"}
              id={"Supported-HD-Codecs-type-1"}
              name={"Supported_HD_Codecs_type_icon1"}
              className={classes["RTP-Proxy-class-content-input1-checkbox"]}
            />
            <Checkbox
              {...register("Supported_HD_Codecs_type_icon2")}
              title={"AMR-WB"}
              id={"Supported-HD-Codecs-type-2"}
              name={"Supported_HD_Codecs_type_icon2"}
              className={classes["RTP-Proxy-class-content-input1-checkbox"]}
            />
          </div>
        </div>
        <Switch
          title={"Enable SRTP"}
          id={"srtp"}
          name={"Enable_SRTP"}
          {...register("Enable_SRTP")}
          className={classes["RTP-Proxy-class-content-input2"]}
        />
        <div
          className={classNames(
            classes["RTP-Proxy-class-content-input3"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <span className={classNames("RTP-Proxy-Ports-title")}>
            Inbound RTP Proxy Port Range :
          </span>
          <div
            className={classNames(
              classes["RTP-Proxy-Ports"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <div
              className={classNames(
                "d-flex",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <InputComponent
                title={"Port Minimum*"}
                id={"Inbound-Port-Minimum"}
                className={classes["port"]}
                name={"Inbound_Port_Minimum"}
                type={"number"}
                {...register("Inbound_Port_Minimum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.Inbound_Port_Minimum)}
                errorMessage={errors?.Inbound_Port_Minimum?.message}
              />
            </div>

            <div
              className={classNames(
                "d-flex",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <InputComponent
                title={"Port Maximum*"}
                id={"Inbound-Port-Maximum"}
                className={classes["port"]}
                name={"Inbound_Port_Maximum"}
                type={"number"}
                {...register("Inbound_Port_Maximum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.Inbound_Port_Maximum)}
                errorMessage={errors?.Inbound_Port_Maximum?.message}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            classes["RTP-Proxy-class-content-input4"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <span className={classNames("RTP-Proxy-Ports-title")}>
            Outbound RTP Proxy Port Range :
          </span>
          <div
            className={classNames(
              classes["RTP-Proxy-Ports"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <div
              className={classNames(
                "d-flex",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <InputComponent
                title={"Port Minimum*"}
                id={"Outbound-Port-Minimum"}
                className={classes["port"]}
                name={"Outbound_Port_Minimum"}
                type={"number"}
                {...register("Outbound_Port_Minimum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.Outbound_Port_Minimum)}
                errorMessage={errors?.Outbound_Port_Minimum?.message}
              />
            </div>

            <div
              className={classNames(
                "d-flex",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <InputComponent
                title={"Port Maximum*"}
                id={"Outbound-Port-Maximum"}
                className={classes["port"]}
                name={"Outbound_Port_Maximum"}
                type={"number"}
                {...register("Outbound_Port_Maximum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.Outbound_Port_Maximum)}
                errorMessage={errors?.Outbound_Port_Maximum?.message}
              />
            </div>
          </div>
        </div>

        <div
          className={classNames(
            classes["RTP-Proxy-class-content-input5"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <Switch
            title={"Enable Maximum Call Duration :"}
            id={"Enable-Call-Duration"}
            name={"Enable_Maximum_Call_Duration"}
            {...register("Enable_Maximum_Call_Duration")}
            className={classes["RTP-Proxy-class-content-input5-switch"]}
          />

          <div
            className={classNames(
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              id={"Call-Duration"}
              className={classes["Call-Duration"]}
              name={"Call_Duration"}
              unit={"Second"}
              {...register("Call_Duration")}
              type={"number"}
              {...register("Call_Duration", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 100,
                  message: "مقدار این فیلد باید حداقل 100 باشد",
                },
              })}
              isError={Boolean(errors?.Call_Duration)}
              errorMessage={errors?.Call_Duration?.message}
            />
          </div>
        </div>

        <div
          className={classNames(
            classes["RTP-Proxy-class-content-input6"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <label for={"RTP-Loss-Timeout"}>{"RTP Loss Timeout :"}</label>
          <div>
            <InputComponent
              id={"RTP-Loss-Timeout"}
              className={classes["RTP-Loss-Timeout"]}
              name={"RTP_Loss_Timeout"}
              unit={"Second"}
              type={"number"}
              {...register("RTP_Loss_Timeout", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 10,
                  message: "مقدار این فیلد باید حداقل 10 باشد",
                },
              })}
              isError={Boolean(errors?.RTP_Loss_Timeout)}
              errorMessage={errors?.RTP_Loss_Timeout?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RtpProxy };
