import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { NodeContext } from "../../../context/NodeContext";
import { ErrorContext } from "../../../../src/context/ErrorContext";
import { useEffect, useState } from "react";
import Axios from "axios";
import classes from "./MyTable.module.css";
import classNames from "classnames";
import { Modal } from "../topology/Modal";
import { Pencil } from "../../icons/Pencil";
import { Tick } from "../../icons/Tick";
import { Close } from "../../icons/Close";
import { Trash } from "../../icons/Trash";

const MyTable = () => {
  const url = "https://c6059f0c-d4f4-45f8-9187-a1d3da3b8645.mock.pstmn.io";
  const token = localStorage.getItem("token");
  const nodeTypeName = ["pcscf", "rtpProxy", "core"];
  const [curNode, setCurNode] = useState("");
  const [modal, setModal] = useState(false);

  const [selectedNode, setSelectedNode] = useState(null);
  const { nodes, toggleNodes } = useContext(NodeContext);
  const { error, toggleError } = useContext(ErrorContext);

  const onModalConfirm = (node) => {
    const data = {
      id: Number(node.id),
    };
    setSelectedNode(null);
    Axios.post(`${url}/api/topology/reactDeleteNode`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          toggleNodes(response.data.nodes);
          toggleError("success");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toggleError(error.message);
      });
  };

  useEffect(() => {
    getTableInfo();
  }, []);

  function getTableInfo() {
    Axios.get(`${url}/api/topology`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const nodes = response.data.nodes;
        toggleNodes(nodes);
        setCurNode("pcscf");
      })
      .catch((err) => {
        console.log("Problemmm");
      });
  }

  const pcscf = nodes.filter((q) => q.type === "pcscf");
  const rtpProxy = nodes.filter((q) => q.type === "rtpProxy");
  const core = nodes.filter((q) => q.type === "core");

  const desiredNodes =
    curNode === "pcscf" ? pcscf : curNode === "rtpProxy" ? rtpProxy : core;

  return (
    <>
      <table className={classNames(classes["node-table"])}>
        <tr className={classNames("d-flex", "justify-content-around")}>
          <th
            onClick={() => {
              setCurNode("pcscf");
            }}
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "justify-content-center",
              "align-items-center"
            )}
          >
            P-CSCF Nodes
          </th>
          <th
            onClick={() => {
              setCurNode("rtpProxy");
            }}
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "justify-content-center",
              "align-items-center"
            )}
          >
            RTP Proxy Nodes
          </th>
          <th
            onClick={() => {
              setCurNode("core");
            }}
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "justify-content-center",
              "align-items-center"
            )}
          >
            Core Nodes
          </th>
        </tr>

        <tr className={classNames("d-flex", "justify-content-center")}>
          <th
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "align-items-center"
            )}
          >
            <span> Node Name </span>
          </th>
          <th
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "align-items-center"
            )}
          >
            <span> IP Address </span>
          </th>
          <th
            className={classNames(
              classes["node-table-title"],
              "d-flex",
              "align-items-center"
            )}
          >
            <span> Status </span>
          </th>
        </tr>

        <tr className={classNames(classes["node-table-contents"])}>
          {desiredNodes.map((item) => {
            return (
              <td className={classNames("d-block")}>
                <div className={classNames(classes["node-table-content"])}>
                  <form
                    id={`${item.id}edit-form`}
                    className={classNames(
                      "d-flex",
                      "align-items-center",
                      "justify-content-between"
                    )}
                  >
                    <input
                      type="text"
                      id={`${item.id}pname`}
                      className={classNames(classes["node-table-content-name"])}
                      value={item.name}
                      disabled
                    />
                    <input
                      type="text"
                      id={`${item.id}pip`}
                      className={classNames(classes["node-table-content-ip"])}
                      value={item.ip}
                      disabled
                    />
                    <input
                      type="text"
                      id={`${item.id}pstatus`}
                      className={classNames(
                        classes["node-table-content-status"]
                      )}
                      value={item.status}
                      disabled
                    />
                    <div
                      className={classNames(
                        classes["node-table-content-icon"],
                        "d-flex",
                        "align-items-center",
                        "justify-content-around"
                      )}
                    >
                      <div onClick={() => alert("pencil")}>
                        <Pencil />
                      </div>

                      <div onClick={() => setSelectedNode(item)}>
                        <Trash />
                      </div>
                    </div>
                  </form>
                </div>
              </td>
            );
          })}
        </tr>
      </table>
      {selectedNode && (
        <Modal
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onConfirm={() => onModalConfirm(selectedNode)}
        />
      )}
    </>
  );
};

export { MyTable };
