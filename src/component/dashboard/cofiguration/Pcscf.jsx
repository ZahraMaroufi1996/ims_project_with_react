import React, { useState } from "react";
import Axios from "axios";
import classes from "./Pcscf.module.css";
import { Switch } from "./Switch";
import { Checkbox } from "./Checkbox";

import classNames from "classnames";
import { InputComponent } from "./InputComponent";

const Pcscf = () => {
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
          name={"Enable-IPsec"}
          className={"P-CSCF-class-content-field1"}
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
              title={"AES-CBC"}
              id={"Encryption-Algorithm-type-1"}
              name={"Encryption-Algorithm-type-icon1"}
              value={"AES_CBC"}
              className={"P-CSCF-class-content-field2-checkbox1"}
            />
            <Checkbox
              title={"DES-EDE3-CBC"}
              id={"Encryption-Algorithm-type-2"}
              name={"Encryption-Algorithm-type-icon2"}
              value={"DES_EDE3_CBC"}
              className={"P-CSCF-class-content-field2-checkbox2"}
            />
            <Checkbox
              title={"Plain(No encryption)"}
              id={"Encryption-Algorithm-type-3"}
              name={"Encryption-Algorithm-type-icon3"}
              value={"Plain"}
              className={"P-CSCF-class-content-field2-checkbox3"}
            />
          </div>
        </div>

        <Switch
          title={"Enable IPsec"}
          id={"tls"}
          name={"Enable-TLS"}
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
            className={classNames(
              classes["P-CSCF-class-content-field4-input1"]
            )}
          >
            <InputComponent
              title={"Shared Memory*"}
              id={"pcscf-shared-memory"}
              name={"p_shared_memory"}
              className={"shared-memory"}
            />
          </div>

          <div
            className={classNames(
              classes["P-CSCF-class-content-field4-input2"]
            )}
          >
            <InputComponent
              title={"Private Memory*"}
              id={"pcscf-private-memory"}
              name={"p_private_memory"}
              className={"private-memory"}
            />
          </div>
        </div>
      </div>

      {/* <div class="P-CSCF-class-Rx-configuration d-flex flex-column justify-content-around align-items-center">
        <div class="P-CSCF-class-Rx-configuration-field1 d-flex flex-row justify-content-between align-items-center">
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

        <div class="P-CSCF-class-Rx-configuration-field2 d-flex justify-content-between align-items-center">
          <label for="Rx-configuration-field2">PCRF FQDN*</label>
          <input
            class="rx-configuration-box"
            type="text"
            id="Rx-configuration-field2"
          />
        </div>

        <div class="P-CSCF-class-Rx-configuration-field3 d-flex justify-content-between align-items-center">
          <label for="Rx-configuration-field3">PCRF Realm*</label>
          <input
            class="rx-configuration-box"
            type="text"
            id="Rx-configuration-field3"
            disabled
          />
        </div>

        <div class="P-CSCF-class-Rx-configuration-field4 d-flex justify-content-between align-items-center">
          <span>Transport Protocol</span>
          <div class="transport-protocol d-flex justify-content-between align-items-center">
            <input
              class="chb chb-1-circle"
              type="radio"
              id="Transport-Protocol-type-1"
              name="Transport_Protocol"
              value="SCTP"
              disabled
            />
            <label for="Transport-Protocol-type-1">SCTP</label>
          </div>

          <div class="transport-protocol d-flex justify-content-between align-items-center">
            <input
              class="chb chb-1-circle"
              type="radio"
              id="Transport-Protocol-type-2"
              name="Transport_Protocol"
              value="TCP"
              disabled
            />
            <label for="Transport-Protocol-type-2">TCP</label>
          </div>
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
          <input
            type="text"
            id="Rx-Source-Port"
            name="Rx_Source_Port"
            disabled
          />
        </div>
      </div> */}
    </div>
  );
};

export { Pcscf };
