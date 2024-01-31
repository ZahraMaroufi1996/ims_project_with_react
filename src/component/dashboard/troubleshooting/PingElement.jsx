import React, { useState } from "react";
import Axios from "axios";
import classes from "./PingElement.module.css";
import classNames from "classnames";
import { SelectComponent } from "./SelectComponent";
import { IpInput } from "../topology/ipInput";
import { MyButton } from "../cofiguration/MyButton";

const PingElement = () => {
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";
  const [ipAddress, setIpAddress] = useState();
  const [node, setNode] = useState();

  const handleOnChangeIpAddress = (value) => {
    setIpAddress(value);
  };

  const handleOnChangeNode = (value) => {
    setNode(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      SubnetMask: ipAddress,
    };

    Axios.post(`${url}/api/topology/networkDefinition`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status == 200) toggleError("success");
      })
      .catch((error) => {
        toggleError(error.message);
      });
  };

  return (
    <div
      className={classNames(
        classes["main-content-left-side"],
        "d-flex",
        "justify-content-between",
        "flex-column"
      )}
    >
      <span className={classNames(classes["left-side-content-title"])}>
        Ping
      </span>

      <div className={classNames("d-flex", "flex-column")}>
        <form
          className={classNames(
            "d-flex",
            "justify-content-between",
            "align-items-start"
          )}
          onSubmit={handleSubmit}
        >
          <div
            className={classNames(
              classes["node"],
              "d-flex",
              "align-items-center"
            )}
          >
            <SelectComponent onChange={handleOnChangeNode} />
          </div>
          <div
            className={classNames("d-flex", "flex-column", "align-items-end")}
          >
            <IpInput
              title={"IP address"}
              className={classes["ip-address"]}
              onChange={handleOnChangeIpAddress}
            />

            <MyButton title={"Run"} className={classes["run-button"]} />
          </div>
        </form>

        <div
          className={classNames(
            classes["command-result"],
            "d-flex",
            "flex-column"
          )}
        >
          <span className={classNames(classes["command-result-title"])}>
            Command result
          </span>
          <div className={classNames(classes["command-result-content"])}></div>
        </div>
      </div>
    </div>
  );
};

export { PingElement };
