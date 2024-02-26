import React from "react";
import { useFormContext } from "react-hook-form";
import classes from "./RtpProxy.module.css";
import { InputComponent } from "../input/InputComponent";
import { Checkbox } from "../checkbox/Checkbox";
import { Switch } from "../switch/Switch";

import classNames from "classnames";

const RtpProxy = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={classNames(
        classes["rtp-proxy"],
        "d-flex",
        "align-items-center",
        "justify-content-center"
      )}
    >
      <div
        className={classNames(
          classes["rtp-proxy-content"],
          "d-flex",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={classNames("d-flex", "align-item-center")}>
          <span className={classNames(classes["rtp-proxy-content-title"])}>
            RTP Proxy
          </span>
          <div
            className={classNames(
              classes["rtp-proxy-content-hd-codes"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <span>Supported HD Codecs :</span>
            <Checkbox
              {...register("supported_hd_codes_g722")}
              title={"G.722"}
              id={"supported-hd-codes-g722"}
              name={"supported_hd_codes_g722"}
              className={classes["rtp-proxy-content-hd-codes-checkbox"]}
            />
            <Checkbox
              {...register("supported_hd_codes_amr_wb")}
              title={"AMR-WB"}
              id={"supported-hd-codes-amr-wb"}
              name={"supported_hd_codes_amr_wb"}
              className={classes["rtp-proxy-content-hd-codes-checkbox"]}
            />
          </div>
        </div>
        <Switch
          title={"Enable SRTP"}
          id={"srtp"}
          name={"Enable_SRTP"}
          {...register("enable_srtp")}
          className={classes["rtp-proxy-content-enable-srtp"]}
        />
        <div
          className={classNames(
            classes["rtp-proxy-content-inbound-port-range"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <span className={classNames("rtp-proxy-port-title")}>
            Inbound RTP Proxy Port Range :
          </span>
          <div
            className={classNames(
              classes["rtp-proxy-port"],
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
                id={"inbound-port-minimum"}
                className={classes["port"]}
                name={"inbound_port_minimum"}
                type={"number"}
                {...register("inbound_port_minimum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.inbound_port_minimum)}
                errorMessage={errors?.inbound_port_minimum?.message}
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
                id={"inbound-port-maximum"}
                className={classes["port"]}
                name={"inbound_port_maximum"}
                type={"number"}
                {...register("inbound_port_maximum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.inbound_port_maximum)}
                errorMessage={errors?.inbound_port_maximum?.message}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            classes["rtp-proxy-content-outbound-port-range"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <span className={classNames("rtp-proxy-port-title")}>
            Outbound RTP Proxy Port Range :
          </span>
          <div
            className={classNames(
              classes["rtp-proxy-port"],
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
                id={"outbound-port-minimum"}
                className={classes["port"]}
                name={"outbound_port_minimum"}
                type={"number"}
                {...register("outbound_port_minimum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.outbound_port_minimum)}
                errorMessage={errors?.outbound_port_minimum?.message}
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
                id={"outbound-port-maximum"}
                className={classes["port"]}
                name={"outbound_port_maximum"}
                type={"number"}
                {...register("outbound_port_maximum", {
                  required: "وارد کردن این فیلد اجباری است",
                  min: {
                    value: 10000,
                    message: "مقدار این فیلد باید حداقل 10000 باشد",
                  },
                })}
                isError={Boolean(errors?.outbound_port_maximum)}
                errorMessage={errors?.outbound_port_maximum?.message}
              />
            </div>
          </div>
        </div>

        <div
          className={classNames(
            classes["rtp-proxy-content-call-duration"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <Switch
            title={"Enable Maximum Call Duration :"}
            id={"enable-call-duration"}
            name={"enable_call_duration"}
            {...register("enable_call_duration")}
            className={classes["rtp-proxy-content-call-duration-switch"]}
          />

          <div
            className={classNames(
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <InputComponent
              id={"call-duration"}
              className={classes["call-duration"]}
              name={"call_duration"}
              unit={"Second"}
              type={"number"}
              {...register("call_duration", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 100,
                  message: "مقدار این فیلد باید حداقل 100 باشد",
                },
              })}
              isError={Boolean(errors?.call_duration)}
              errorMessage={errors?.call_duration?.message}
            />
          </div>
        </div>

        <div
          className={classNames(
            classes["rtp-proxy-content-loss-timeout"],
            "d-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <label for={"rtp_proxy_loss_timeout"}>{"RTP Loss Timeout :"}</label>
          <div>
            <InputComponent
              id={"rtp-proxy-loss-timeout"}
              className={classes["rtp-proxy-loss-timeout"]}
              name={"rtp_proxy_loss_timeout"}
              unit={"Second"}
              type={"number"}
              {...register("rtp_proxy_loss_timeout", {
                required: "وارد کردن این فیلد اجباری است",
                min: {
                  value: 10,
                  message: "مقدار این فیلد باید حداقل 10 باشد",
                },
              })}
              isError={Boolean(errors?.rtp_proxy_loss_timeout)}
              errorMessage={errors?.rtp_proxy_loss_timeout?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RtpProxy };
