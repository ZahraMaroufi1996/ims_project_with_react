import React, { useState } from "react";
import Axios from "axios";
import classes from "./Pcscf.module.css";
import { Switch } from "./Switch";
import { Checkbox } from "./Checkbox";
import { RxConfiguration } from "./RxConfiguration";
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
              type={"checkbox"}
              title={"AES-CBC"}
              id={"Encryption-Algorithm-type-1"}
              name={"Encryption-Algorithm-type-icon1"}
              value={"AES_CBC"}
              className={"P-CSCF-class-content-field2-checkbox1"}
            />
            <Checkbox
              type={"checkbox"}
              title={"DES-EDE3-CBC"}
              id={"Encryption-Algorithm-type-2"}
              name={"Encryption-Algorithm-type-icon2"}
              value={"DES_EDE3_CBC"}
              className={"P-CSCF-class-content-field2-checkbox2"}
            />
            <Checkbox
              type={"checkbox"}
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
            className={classNames(classes["P-CSCF-class-content-field4-input"])}
          >
            <InputComponent
              title={"Shared Memory*"}
              id={"pcscf-shared-memory"}
              name={"p_shared_memory"}
              className={"memory"}
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
              className={"memory"}
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
