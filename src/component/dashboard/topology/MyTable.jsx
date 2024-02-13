import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NodeContext } from "../../../context/NodeContext";
import { TopologyDataContext } from "../../../context/TopologyDataContext";
import classes from "./MyTable.module.css";
import classNames from "classnames";
import { Modal } from "../topology/Modal";
import { Pencil } from "../../icons/Pencil";
import { Tick } from "../../icons/Tick";
import { Close } from "../../icons/Close";
import { Trash } from "../../icons/Trash";

const MyTable = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const token = localStorage.getItem("token");
  const nodeTypeName = ["pcscf", "rtpProxy", "core"];
  const [nodeType, setNodeType] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const { nodes, toggleNodes } = useContext(NodeContext);
  const { topologyData, toggleTopologyData } = useContext(TopologyDataContext);

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
        if (response.status == 200) {
          const currentNode = nodes?.filter((item) => item.id !== data.id);
          toggleNodes(currentNode);
          toast("Your request was done successfully!");
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  useEffect(() => {
    getTableInfo();
  }, [topologyData]);

  function getTableInfo() {
    toggleNodes(topologyData?.nodes);
    setNodeType("pcscf");
  }

  const pcscf = nodes?.filter((q) => q.type === "pcscf");
  const rtpProxy = nodes?.filter((q) => q.type === "rtpProxy");
  const core = nodes?.filter((q) => q.type === "core");

  const desiredNodes =
    nodeType === "pcscf" ? pcscf : nodeType === "rtpProxy" ? rtpProxy : core;

  return (
    <>
      <table className={classNames(classes["node-table"])}>
        <tr className={classNames("d-flex", "justify-content-around")}>
          <th
            onClick={() => {
              setNodeType("pcscf");
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
              setNodeType("rtpProxy");
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
              setNodeType("core");
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
          {desiredNodes?.map((item) => {
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
