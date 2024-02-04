import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import classes from "./PingElement.module.css";
import classNames from "classnames";
import { SelectComponent } from "./SelectComponent";
import { IpInput } from "../topology/ipInput";
import { MyButton } from "../cofiguration/MyButton";

const PingElement = () => {
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [ipAddress, setIpAddress] = useState();
  const [node, setNode] = useState();
  const [commandResult, setCommandResult] = useState("");

  const handleOnChangeIpAddress = (value) => {
    setIpAddress(value);
  };

  // const handleOnChangeNode = (value) => {
  //   setNode(value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const token = localStorage.getItem("token");

  //   const formData = {
  //     ip: ipAddress,
  //     node: node,
  //   };

  //   // console.log(formData);
  //   Axios.post(`${url}/api/troubleshooting/ping`, formData, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status == 200)
  //         // toggleError("success");
  //         setCommandResult(response.data.commandResult);
  //       console.log("success");
  //     })
  //     .catch((error) => {
  //       // toggleError(error.message);
  //       console.log(error);
  //     });
  // };

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    const formData = {
      ...data,
      ping_ip: ipAddress,
    };
    // console.log(data);
    Axios.post(`${url}/api/troubleshooting/ping`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response);
        setCommandResult(response.data.commandResult);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className={classNames(
              classes["node"],
              "d-flex",
              "align-items-center",
              "justify-content-start"
            )}
          >
            <SelectComponent
              title={"Node"}
              id={"ping-node-id"}
              {...register(`ping_node_type`)}
            />
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
          <div className={classNames(classes["command-result-content"])}>
            <p p className={classNames(classes["scrollable-text"])}>
              {commandResult}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PingElement };
