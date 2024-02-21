import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./PingElement.module.css";
import classNames from "classnames";
import { SelectComponent } from "../select/SelectComponent";
import { IpInput } from "../../topology/ipInput";
import { MyButton } from "../../cofiguration/myButton/MyButton";

const PingElement = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
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

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    const formData = {
      ...data,
      ping_node_ip: ipAddress,
    };

    Axios.post(`${url}/api/troubleshooting/ping`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setCommandResult(response.data.commandResult);
        toast("Your request was done successfully!");
      })
      .catch((error) => {
        toast(error.message);
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
              {...register(`ping_node_type`)}
              title={"Node"}
              id={"ping-node-id"}
              name={"ping_node_type"}
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
      <ToastContainer />
    </div>
  );
};

export { PingElement };
