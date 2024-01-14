import React, { useState } from "react";

import Axios from "axios";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "./ipInput";
import { MyButton } from "../cofiguration/MyButton";
import classNames from "classnames";

const NetworkDefinition = () => {
  const [subnet, setSubnet] = useState();
  const [gateway, setGateWay] = useState();
  const url = "https://c6059f0c-d4f4-45f8-9187-a1d3da3b8645.mock.pstmn.io";

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      SubnetMask: subnet,
      Gateway: gateway,
    };

    Axios.post(`${url}/api/topology/networkDefinition`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleOnChangeSubnet = (value) => {
    setSubnet(value);
  };
  const handleOnChangeGateWay = (value) => {
    setGateWay(value);
  };

  return (
    <div class={classes["network"]}>
      <form
        id="network-definition-form"
        className={classNames(
          classes["network-definition-form"],
          "d-flex",
          "flex-row ",
          "align-items-center"
        )}
        onSubmit={handleSubmit}
      >
        <div
          className={classNames(
            classes["network-definition"],
            "d-flex",
            "flex-row",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <span className={classes["title-span"]}>Network Definition</span>
          <IpInput
            title={"subnetmask"}
            onChange={handleOnChangeSubnet}
            className={classes["network-definition-subnetmask"]}
          />
          <IpInput
            title={"gateway"}
            onChange={handleOnChangeGateWay}
            className={classes["network-definition-gateway"]}
          />
        </div>
        <MyButton
          title={"Set"}
          className={classes["network-definition-button"]}
        />
        {/* </div> */}
      </form>
    </div>
  );
};

export { NetworkDefinition };
