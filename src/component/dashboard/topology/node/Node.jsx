import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Node.module.css";
import classNames from "classnames";
import { IpInput } from "../ipInput";
import { Checkbox } from "../../cofiguration/checkbox/Checkbox";
import { Radio } from "../radio/Radio";
import { MyButton } from "../../cofiguration/myButton/MyButton";
import { MyTable } from "../table/MyTable";
import { NodeContext } from "../../../../context/NodeContext";

const Node = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const [ipAddress, setIpAddress] = useState();
  const [nodes, setNodes] = useState([]);

  const handleOnChangeIpAddress = (value) => {
    setIpAddress(value);
  };

  const toggleNodes = (nodes) => {
    setNodes(nodes);
  };

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    const formData = {
      name: data.node_name,
      ip: ipAddress,
      type: data.node_type_icon,
    };
    Axios.post(`${url}/api/topology/reactAddNode`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          toggleNodes([...nodes, response.data]);
          toast("Your request was done successfully!");
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <NodeContext.Provider value={{ nodes, toggleNodes }}>
      <div className={classNames(classes["node"], "d-flex", "flex-column ")}>
        <form
          id="add-node-form"
          onSubmit={handleSubmit(onSubmit)}
          className={classNames(
            classes["node-properties"],
            "d-flex",
            "flex-column"
          )}
        >
          <div className={classNames("d-flex")}>
            <span className={classNames(classes["add-node-title"])}>
              Nodes IP Addresses
            </span>
            <div
              className={classNames(
                classes["node-name"],
                "d-flex",
                "justify-content-between",
                "align-items-center"
              )}
            >
              <span>Name</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  name="node_name"
                  className={classNames(
                    classes["node-name-box"],
                    classes["input-general"],
                    `form-control${errors.node_name ? " is-invalid" : ""}`
                  )}
                  {...register("node_name", {
                    required: "وارد کردن این فیلد اجباری است",
                  })}
                />
                {errors.node_name && (
                  <div
                    style={{ top: 30, left: 0, position: "absolute" }}
                    className="invalid-feedback"
                  >
                    {errors.node_name.message}
                  </div>
                )}
              </div>
            </div>

            <IpInput
              title={"IP address"}
              className={classes["node-ip"]}
              onChange={handleOnChangeIpAddress}
            />
          </div>

          <div className={classNames("d-flex")}>
            <div
              className={classNames(
                classes["node-type"],
                "d-flex",
                "justify-content-between",
                "align-items-center"
              )}
            >
              <span>Node Types :</span>

              <Radio
                {...register(`node_type_icon`)}
                title={"P-CSCF"}
                id={"node-type-pscf"}
                value="pcscf"
                name={"node_type_icon"}
                className={classes["node-type-pcscf-checkbox"]}
              />

              <Radio
                {...register(`node_type_icon`)}
                title={"RTP Proxy"}
                id={"node-type-rtp-proxy"}
                value="rtpProxy"
                name={"node_type_icon"}
                className={classes["node-type-rtp-proxy-checkbox"]}
              />

              <Radio
                {...register(`node_type_icon`)}
                title={"Core"}
                id={"node-type-core"}
                value="core"
                name={"node_type_icon"}
                className={classes["node-type-core-checkbox"]}
              />
            </div>
            <button
              type="submit"
              className={classNames(classes["add-node-button"])}
            >
              Add Node
            </button>
          </div>
        </form>

        <MyTable />
      </div>
    </NodeContext.Provider>
  );
};

export { Node };
