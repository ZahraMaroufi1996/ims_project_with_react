import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./PacketElement.module.css";
import classNames from "classnames";
import { SelectComponent } from "../select/SelectComponent";
import { InputComponent } from "../../cofiguration/input/InputComponent";
import { MyButton } from "../../cofiguration/myButton/MyButton";

const PacketElement = () => {
  const url = "https://35a474cb-4d59-4846-8b43-fc913daf7a5f.mock.pstmn.io";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
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
      <span className={classNames(classes["packet-content-title"])}>
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
              id={"packet-node"}
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
              id={"packet-interface"}
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
              title={"Options"}
              name={"packet_option"}
              id={"packet-option"}
              className={classes["node-option-box"]}
              type={"text"}
              {...register("packet_option", {
                required: "وارد کردن این فیلد اجباری است",
              })}
              isError={Boolean(errors?.packet_option)}
              errorMessage={errors?.packet_option?.message}
            />
          </div>
          <MyButton title={"Start"} className={classes["start-button"]} />
        </div>
      </form>
    </>
  );
};

export { PacketElement };
