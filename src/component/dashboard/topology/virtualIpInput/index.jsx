import { useEffect, useState, useContext } from "react";
import { TopologyDataContext } from "../../../../context/TopologyDataContext";
import React from "react";
import Axios from "axios";
import classes from "./index.module.css";
import classNames from "classnames";

const VirtualIpInput = ({ onChange, mainTitle, subTitle }) => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const { topologyData, toggleTopologyData } = useContext(TopologyDataContext);
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

  useEffect(() => {
    const ip = `${form.field1}.${form.field2}.${form.field3}.${form.field4}`;
    onChange(ip);
  }, [form.field1, form.field2, form.field3, form.field4]);

  useEffect(() => {
    getNetworkInfo();
  }, [topologyData]);

  const getNetworkInfo = () => {
    if (mainTitle === "Database Virtual IP")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.databaseVirtualIp.split(".")[0],
        field2: topologyData?.databaseVirtualIp.split(".")[1],
        field3: topologyData?.databaseVirtualIp.split(".")[2],
        field4: topologyData?.databaseVirtualIp.split(".")[3],
      }));
    else if (mainTitle === "DNS Server Virtual IP")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.dnsVirtualIp.split(".")[0],
        field2: topologyData?.dnsVirtualIp.split(".")[1],
        field3: topologyData?.dnsVirtualIp.split(".")[2],
        field4: topologyData?.dnsVirtualIp.split(".")[3],
      }));
    else if (mainTitle === "Homer Virtual IP")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.homerVirtualIp.split(".")[0],
        field2: topologyData?.homerVirtualIp.split(".")[1],
        field3: topologyData?.homerVirtualIp.split(".")[2],
        field4: topologyData?.homerVirtualIp.split(".")[3],
      }));
  };

  return (
    <div className={classNames(classes["virtual-ips-content"])}>
      <div
        className={classNames(
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <span className={classNames(classes["virtual-ips-main-title"])}>
          {mainTitle}
        </span>
        <div
          className={classNames(
            classes["virtual-ips-boxes"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <input
            type="text"
            name="field1"
            className={classNames(
              classes["ip-octet"],
              classes["input-general"]
            )}
            value={form.field1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field2"
            className={classNames(
              classes["ip-octet"],
              classes["input-general"]
            )}
            value={form.field2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field3"
            className={classNames(
              classes["ip-octet"],
              classes["input-general"]
            )}
            value={form.field3}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field4"
            className={classNames(
              classes["ip-octet"],
              classes["input-general"]
            )}
            value={form.field4}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={classNames(classes["virtual-ips-sub-title"])}>
        {subTitle}
      </div>
    </div>
  );
};

export { VirtualIpInput };
