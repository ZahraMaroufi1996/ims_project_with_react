import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "../ipInput";
import { MyButton } from "../../cofiguration/myButton/MyButton";
import classNames from "classnames";

const NetworkDefinition = () => {
  const [subnetmask, setSubnetmask] = useState();
  const [gateway, setGateway] = useState();
  const url = "https://35a474cb-4d59-4846-8b43-fc913daf7a5f.mock.pstmn.io";

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      SubnetMask: subnetmask,
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

  const handleOnChangeSubnetmask = (value) => {
    setSubnetmask(value);
  };
  const handleOnChangeGateway = (value) => {
    setGateway(value);
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
              onChange={handleOnChangeSubnetmask}
              className={classes["network-definition-subnetmask"]}
            />
            <IpInput
              title={"gateway"}
              onChange={handleOnChangeGateway}
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
