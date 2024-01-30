import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./Node.module.css";
import { IpInput } from "../topology/ipInput";
import { Checkbox } from "../cofiguration/Checkbox";
import { Radio } from "../topology/Radio";
import classNames from "classnames";
import { MyButton } from "../cofiguration/MyButton";
import { MyTable } from "./MyTable";
import { ErrorShow } from "../ErrorShow";
import { NodeContext } from "../../../context/NodeContext";

const Node = () => {
  const url = "https://c6059f0c-d4f4-45f8-9187-a1d3da3b8645.mock.pstmn.io";

  const { register, handleSubmit } = useForm();
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
    console.log(data);
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
        console.log(response);
        if (response.status == 200) {
          toggleNodes(response.data.nodes);
        }
      })
      .catch((error) => {
        console.log(error);
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
              <input
                type="text"
                name="node_name"
                className={classNames(classes["node-name-box"])}
                {...register(`node_name`)}
              />
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
                id={"node-type-1"}
                value="pcscf"
                name={"node_type_icon"}
                className={classes["node-type-core-checkbox"]}
              />

              <Radio
                {...register(`node_type_icon`)}
                title={"RTP Proxy"}
                id={"node-type-2"}
                value="rtpProxy"
                name={"node_type_icon"}
                className={classes["node-type-rtp-proxy-checkbox"]}
              />

              <Radio
                {...register(`node_type_icon`)}
                title={"Core"}
                id={"node-type-3"}
                value="core"
                name={"node_type_icon"}
                className={classes["node-type-pcscf-checkbox"]}
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
        <ErrorShow />
      </div>
    </NodeContext.Provider>
  );
};

export { Node };
