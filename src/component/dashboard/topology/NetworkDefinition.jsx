import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "./ipInput";
import { MyButton } from "../cofiguration/MyButton";
import classNames from "classnames";

const NetworkDefinition = () => {
  const [isShow, setShow] = useState(null);
  const [subnet, setSubnet] = useState();
  const [gateway, setGateWay] = useState();
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";

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
      .then((response) => {
        if (response.status == 200)
          toast("Your request was done successfully!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleOnChangeSubnet = (value) => {
    setSubnet(value);
  };
  const handleOnChangeGateWay = (value) => {
    setGateWay(value);
  };

  return (
    <>
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
            <span className={classNames(classes["network-definition-title"])}>
              Network Definition
            </span>
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
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export { NetworkDefinition };
