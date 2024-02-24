import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TopologyDataContext } from "../../../../context/TopologyDataContext";
import { ConfigDataContext } from "../../../../context/ConfigDataContext";
import Axios from "axios";
import classes from "./index.module.css";
import classNames from "classnames";

const IpInput = ({ onChange, title, className }) => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const { topologyData, toggleTopologyData } = useContext(TopologyDataContext);
  const { configData, toggleConfigData } = useContext(ConfigDataContext);
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getNetworkInfo = () => {
    if (title === "subnetmask")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.subnetMask.split(".")[0],
        field2: topologyData?.subnetMask.split(".")[1],
        field3: topologyData?.subnetMask.split(".")[2],
        field4: topologyData?.subnetMask.split(".")[3],
      }));
    else if (title === "gateway")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.gateway.split(".")[0],
        field2: topologyData?.gateway.split(".")[1],
        field3: topologyData?.gateway.split(".")[2],
        field4: topologyData?.gateway.split(".")[3],
      }));
    else if (title === "PCRF IP Address") {
      setForm((prevForm) => ({
        ...prevForm,
        field1: configData?.pcscf.rxConfiguration.pcrfIp.split(".")[0],
        field2: configData?.pcscf.rxConfiguration.pcrfIp.split(".")[1],
        field3: configData?.pcscf.rxConfiguration.pcrfIp.split(".")[2],
        field4: configData?.pcscf.rxConfiguration.pcrfIp.split(".")[3],
      }));
    } else if (title === "IP address")
      setForm((prevForm) => ({
        ...prevForm,
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      }));
  };

  useEffect(() => {
    const ip = `${form.field1}.${form.field2}.${form.field3}.${form.field4}`;
    if (onChange) onChange(ip);
  }, [form.field1, form.field2, form.field3, form.field4]);

  useEffect(() => {
    getNetworkInfo();
  }, [topologyData, configData]);

  return (
    <div
      className={classNames(
        className,
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      > */}
      <input
        type="number"
        name="field1"
        value={form.field1}
        class={classes["ip-octet"]}
        onChange={handleChange}
        // className={classNames(
        //   classes["ip-octet"],
        //   `form-control${errors.field1 ? " is-invalid" : ""}`
        // )}
        // {...register("field1", {
        //   required: "وارد کردن این فیلد اجباری است",
        //   min: {
        //     value: 1,
        //     message: "مقدار این فیلد باید حداقل 1 باشد",
        //   },
        //   max: {
        //     value: 192,
        //     message: "مقدار این فیلد باید حداکثر 192 باشد",
        //   },
        // })}
      />
      {/* {errors.field1 && (
          <div
            style={{ top: 20, left: 0, position: "absolute" }}
            className="invalid-feedback"
          >
            {errors.field1.message}
          </div>
        )} */}
      {/* </div> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      > */}
      <input
        type="number"
        name="field2"
        value={form.field2}
        class={classes["ip-octet"]}
        onChange={handleChange}
        // className={classNames(
        //   classes["ip-octet"],
        //   `form-control${errors.field2 ? " is-invalid" : ""}`
        // )}
        // {...register("field2", {
        //   required: "وارد کردن این فیلد اجباری است",
        //   min: {
        //     value: 1,
        //     message: "مقدار این فیلد باید حداقل 1 باشد",
        //   },
        //   max: {
        //     value: 192,
        //     message: "مقدار این فیلد باید حداکثر 192 باشد",
        //   },
        // })}
      />
      {/* {errors.field2 && (
          <div
            style={{ top: 30, left: 0, position: "absolute" }}
            className="invalid-feedback"
          >
            {errors.field2.message}
          </div>
        )} */}
      {/* </div> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      > */}
      <input
        type="number"
        name="field3"
        value={form.field3}
        class={classes["ip-octet"]}
        onChange={handleChange}
        // className={classNames(
        //   classes["ip-octet"],
        //   `form-control${errors.field3 ? " is-invalid" : ""}`
        // )}
        // {...register("field3", {
        //   required: "وارد کردن این فیلد اجباری است",
        //   min: {
        //     value: 1,
        //     message: "مقدار این فیلد باید حداقل 1 باشد",
        //   },
        //   max: {
        //     value: 192,
        //     message: "مقدار این فیلد باید حداکثر 192 باشد",
        //   },
        // })}
      />
      {/* {errors.field3 && (
          <div
            style={{ top: 30, left: 0, position: "absolute" }}
            className="invalid-feedback"
          >
            {errors.field3.message}
          </div>
        )} */}
      {/* </div> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      > */}
      <input
        type="number"
        name="field4"
        value={form.field4}
        class={classes["ip-octet"]}
        onChange={handleChange}
        // className={classNames(
        //   classes["ip-octet"],
        //   `form-control${errors.field4 ? " is-invalid" : ""}`
        // )}
        // {...register("field4", {
        //   required: "وارد کردن این فیلد اجباری است",
        //   min: {
        //     value: 1,
        //     message: "مقدار این فیلد باید حداقل 1 باشد",
        //   },
        //   max: {
        //     value: 192,
        //     message: "مقدار این فیلد باید حداکثر 192 باشد",
        //   },
        // })}
      />
      {/* {errors.field4 && (
          <div
            style={{ top: 30, left: 0, position: "absolute" }}
            className="invalid-feedback"
          >
            {errors.field4.message}
          </div>
        )} */}
      {/* </div> */}
      {/* { (errors.field1 || errors.field2 )} */}
    </div>
  );
};

export { IpInput };
