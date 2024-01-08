import React, { useState } from "react";
import Axios from "axios";
import classes from "./RxConfiguration.module.css";
import classNames from "classnames";
import { InputComponent } from "./InputComponent";
import { Checkbox } from "./Checkbox";
import { Switch } from "./Switch";

const RxConfiguration = () => {
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
      {/* <div class="P-CSCF-class-Rx-configuration-field1 d-flex flex-row justify-content-between align-items-center">
        <span>PCRF IP Address*</span>

        <input
          type="text"
          name="PCRF_IP_Address_box4"
          class="ip-octet"
          id="PCRF-IP-Address-box1"
          disabled
        />
        <input
          type="text"
          name="PCRF_IP_Address_box3"
          class="ip-octet"
          id="PCRF-IP-Address-box2"
          disabled
        />
        <input
          type="text"
          name="PCRF_IP_Address_box2"
          class="ip-octet"
          id="PCRF-IP-Address-box3"
          disabled
        />
        <input
          type="text"
          name="PCRF_IP_Address-box1"
          class="ip-octet"
          id="PCRF-IP-Address-box4"
          disabled
        />
      </div>


      <div class="P-CSCF-class-Rx-configuration-field5 d-flex justify-content-between align-items-center">
        <span>Rx Source Port</span>
        <label class="switch">
          <input
            type="checkbox"
            id="Enable-Rx-Source-Port"
            name="Enable-Rx-Source-Port"
            disabled
          />
          <span class="slider round"></span>
        </label>
        <input type="text" id="Rx-Source-Port" name="Rx_Source_Port" disabled />
      </div> */}

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
          id={"Rx-configuration-field2"}
          className={"rx-configuration-box"}
        />
      </div>

      <div
        className={classNames(
          classes["P-CSCF-class-Rx-configuration-field3"],
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <InputComponent
          title={"PCRF Realm*"}
          id={"Rx-configuration-field3"}
          className={"rx-configuration-box"}
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

        <Checkbox
          title={"SCTP"}
          id={"Transport-Protocol-type-1"}
          name={"Transport_Protocol"}
          value={"SCTP"}
          className={"transport-protocol"}
          type={"radio"}
        />
        <Checkbox
          title={"TCP"}
          id={"Transport-Protocol-type-2"}
          name={"Transport_Protocol"}
          value={"TCP"}
          className={"transport-protocol"}
          type={"radio"}
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
          name={"Enable-Rx-Source-Port"}
        />
        <input
          type="text"
          id="Rx-Source-Port"
          className={classNames(classes["Rx-Source-Port"])}
          name="Rx_Source_Port"
          disabled
        />
      </div>
    </div>
  );
};

export { RxConfiguration };
