import React, { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../../context/ErrorContext";
import Axios from "axios";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "./ipInput";
import { MyButton } from "../cofiguration/MyButton";
import classNames from "classnames";
import { ErrorShow } from "../ErrorShow";

const NetworkDefinition = () => {
  const { error, toggleError } = useContext(ErrorContext);
  const [subnet, setSubnet] = useState();
  const [gateway, setGateWay] = useState();
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";

  const getNetworkInfo = () => {
    Axios.get(`${url}/api/topology`)
      .then((response) => {
        setSubnet(response.data.subnetMask);
        setGateWay(response.data.gateway);
      })
      .catch((err) => {
        console.log("Problemmm");
        // toggleError(err.message);
      });
  };

  useEffect(() => {
    getNetworkInfo();
  }, []);

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
        if (response.status == 200) toggleError("success");
      })
      .catch((error) => {
        toggleError(error.message);
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
      {error ? <ErrorShow errorMessage={error} /> : ""}
    </>
  );
};

export { NetworkDefinition };
