import React from "react";
import classes from "./Node.module.css";
import { IpInput } from "../topology/ipInput";
import { Checkbox } from "../cofiguration/Checkbox";
import classNames from "classnames";
import { MyButton } from "../cofiguration/MyButton";
import { MyTable } from "./MyTable";

const Node = () => {
  return (
    <div className={classNames(classes["node"], "d-flex", "flex-column ")}>
      <form
        id="add-node-form"
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
            />
          </div>
          {/* <div class="node-ip d-flex flex-row justify-content-between align-items-center">
              <span>IP Address</span>
              <input
                type="text"
                name="IP_Address_field4"
                class="ip-octet"
                id="node-ip-octet1"
              />
              <input
                type="text"
                name="IP_Address_field3"
                class="ip-octet"
                id="node-ip-octet2"
              />
              <input
                type="text"
                name="IP_Address_field2"
                class="ip-octet"
                id="node-ip-octet3"
              />
              <input
                type="text"
                name="IP_Address_field1"
                class="ip-octet"
                id="node-ip-octet4"
              />
            </div> */}
          <IpInput title={"IP address"} className={classes["node-ip"]} />
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

            <Checkbox
              type={"radio"}
              title={"Core"}
              id={"node-type-1"}
              name={"node_type_icon"}
              value={"core"}
              className={classes["node-type-core-checkbox"]}
            />

            <Checkbox
              type={"radio"}
              title={"RTP Proxy"}
              id={"node-type-2"}
              name={"node_type_icon"}
              value={"rtpProxy"}
              className={classes["node-type-rtp-proxy-checkbox"]}
            />

            <Checkbox
              type={"radio"}
              title={"P-CSCF"}
              id={"node-type-3"}
              name={"node_type_icon"}
              value={"pcscf"}
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

      {/* <table class="node-table">
          <tr class="d-flex flex-row justify-content-around">
            <th class="node-table-title d-flex justify-content-center align-items-center">
              P-CSCF Nodes
            </th>
            <th class="node-table-title d-flex justify-content-center align-items-center">
              RTP Proxy Nodes
            </th>
            <th class="node-table-title d-flex justify-content-center align-items-center">
              Core Nodes
            </th>
          </tr>

          <tr class="d-flex flex-row justify-content-center">
            <th class="node-table-title d-flex flex-row align-items-center">
              <span> Node Name </span>
            </th>
            <th class="node-table-title d-flex flex-row align-items-center">
              <span> IP Address </span>
            </th>
            <th class="node-table-title d-flex flex-row align-items-center">
              <span> Status </span>
            </th>
          </tr>

          <tr id="node-table-contents">
            <td>
              <div class="node-table-content">
                <form
                  id="1edit-form"
                  class="d-flex flex-row justify-content-between align-items-center"
                >
                  <input
                    type="text"
                    id="pname"
                    class="node-table-content-name"
                    value="aaaa"
                    disabled
                  />
                  <input
                    type="text"
                    id="pip"
                    class="node-table-content-ip"
                    value="bbbb"
                    disabled
                  />
                  <input
                    type="text"
                    id="pstatus"
                    class="node-table-content-status"
                    value="cccc"
                    disabled
                  />
                  <div class="node-table-content-icon d-flex flex-row">
                    <img
                      class="pencil p-1"
                      id="${q.id}p"
                      src="images/IMS_TOPOLOGY_images/pencil.svg"
                    />
                    <img
                      class="trash p-1"
                      id="${q.id}"
                      src="images/IMS_TOPOLOGY_images/trash-simple.svg"
                    />
                    <img
                      class="tick p-1"
                      id="${q.id}pt"
                      src="images/IMS_TOPOLOGY_images/tick.svg"
                    />
                    <img
                      class="close"
                      id="${q.id}pc"
                      src="images/IMS_TOPOLOGY_images/close.svg"
                    />
                  </div>
                </form>
              </div>
            </td>
          </tr>
        </table> */}
      {/* <MyButton title={"Save"} className={classes["save-node-button"]} /> */}
    </div>
  );
};

export { Node };
