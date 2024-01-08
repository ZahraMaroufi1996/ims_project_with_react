import React, { useState } from "react";
import Axios from "axios";
import classes from "./RtpProxy.module.css";
import { InputComponent } from "./InputComponent";
import { Checkbox } from "./Checkbox";
import { Switch } from "./Switch";

import classNames from "classnames";

const RtpProxy = () => {
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
            type={"checkbox"}
            title={"G.722"}
            id={"Supported-HD-Codecs-type-1"}
            name={"Supported-HD-Codecs-type-icon1"}
            value={"G.722"}
            className={"RTP-Proxy-class-content-input1-checkbox"}
          />
          <Checkbox
            type={"checkbox"}
            title={"AMR-WB"}
            id={"Supported-HD-Codecs-type-2"}
            name={"Supported-HD-Codecs-type-icon2"}
            value={"AMR_WB"}
            className={"RTP-Proxy-class-content-input1-checkbox"}
          />
        </div>
        <Switch title={"Enable SRTP"} id={"srtp"} name={"Enable-SRTP"} />
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
                className={"port"}
                name={"Inbound_Port_Minimum"}
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
                className={"port"}
                name={"Inbound_Port_Maximum"}
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
                className={"port"}
                name={"Outbound_Port_Minimum"}
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
                className={"port"}
                name={"Outbound_Port_Maximum"}
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
            name={"Enable-Maximum-Call-Duration"}
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
              className={"Call-Duration"}
              name={"Call_Duration"}
              unit={"Second"}
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
          <InputComponent
            title={"RTP Loss Timeout :"}
            id={"RTP-Loss-Timeout"}
            className={"RTP-Loss-Timeout"}
            name={"RTP_Loss_Timeout"}
            unit={"Second"}
          />
        </div>
      </div>
    </div>
  );
};

export { RtpProxy };
