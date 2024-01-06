import React, { useState } from "react";

import Axios from "axios";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "./ipInput";
import classNames from "classnames";

const NetworkDefinition = () => {
  const [subnet, setSubnet] = useState();
  const [gateway, setGateWay] = useState();
  const url = "https://88d188a7-0705-4aa4-b0f9-0d2781378c89.mock.pstmn.io";

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
          <IpInput title={"subnetmask"} onChange={handleOnChangeSubnet} />
          <IpInput title={"gateway"} onChange={handleOnChangeGateWay} />
        </div>
        <button
          type="submit"
          class={classNames(
            classes["network-definition-button"],
            classes["topology-buttton"]
          )}
        >
          Set
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export { NetworkDefinition };
