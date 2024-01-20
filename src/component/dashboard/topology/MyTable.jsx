import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import classes from "./MyTable.module.css";
import classNames from "classnames";
import { Pencil } from "../../icons/Pencil";
import { Tick } from "../../icons/Tick";
import { Close } from "../../icons/Close";
import { Trash } from "../../icons/Trash";

const MyTable = () => {
  return (
    <table className={classNames(classes["node-table"])}>
      <tr className={classNames("d-flex", "justify-content-around")}>
        <th
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

      <tr className={classNames(classes["node-table-contentsss"])}>
        <td>
          <div className={classNames(classes["node-table-content"])}>
            <form
              id="1edit-form"
              className={classNames(
                "d-flex",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <input
                type="text"
                id="pname"
                className={classNames(classes["node-table-content-name"])}
                value="aaaa"
                disabled
              />
              <input
                type="text"
                id="pip"
                className={classNames(classes["node-table-content-ip"])}
                value="bbbb"
                disabled
              />
              <input
                type="text"
                id="pstatus"
                className={classNames(classes["node-table-content-status"])}
                value="cccc"
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
                <Close />
                <Tick />
                <Pencil />
                <Trash />
                {/* <img
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
                /> */}
              </div>
            </form>
          </div>
        </td>
      </tr>
    </table>
  );
};

export { MyTable };
