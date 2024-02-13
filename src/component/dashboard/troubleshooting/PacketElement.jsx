import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./PacketElement.module.css";
import { SelectComponent } from "./SelectComponent";
import { InputComponent } from "../cofiguration/InputComponent";
import classNames from "classnames";
import { MyButton } from "../cofiguration/MyButton";

const PacketElement = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    // console.log(data);
    Axios.post(`${url}/api/troubleshooting/packetCapture`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast("Your request was done successfully!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <>
      <span className={classNames(classes["right-side-content-title"])}>
        Packet Capture : tcpdump
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames("d-flex")}>
          <div
            className={classNames(
              classes["node"],
              "d-flex",
              "align-items-center"
            )}
          >
            <SelectComponent
              title={"Node"}
              replace={"Select Node"}
              id={"packet-node-id"}
              {...register(`packet_node_type`)}
            />
          </div>
          <div
            className={classNames(
              classes["interface"],
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <SelectComponent
              title={"Interface"}
              replace={"any"}
              id={"packet-interface-id"}
              {...register(`packet_interface_type`)}
            />
          </div>
        </div>
        <div className={classNames("d-flex")}>
          <div
            className={classNames(
              classes["option"],
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <InputComponent
              {...register("packet_option")}
              title={"Options"}
              name={"packet_option"}
              id={"packet-option"}
              className={classes["node-option-box"]}
            />
          </div>
          <MyButton title={"Start"} className={classes["start-button"]} />
        </div>
      </form>
    </>
  );
};

export { PacketElement };
