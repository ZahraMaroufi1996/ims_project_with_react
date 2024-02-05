import React, { useState } from "react";
import Axios from "axios";
import classes from "./VirtualIps.module.css";
import classNames from "classnames";
import { VirtualIpInput } from "./virtualIpInput";
import { MyButton } from "../cofiguration/MyButton";

const VirtualIps = () => {
  const [databaseVirtualIp, setDatabaseVirtualIp] = useState();
  const [dnsVirtualIp, setDnsVirtualIp] = useState();
  const [homerVirtualIp, setHomerVirtualIp] = useState();

  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      databaseVirtualIp: databaseVirtualIp,
      dnsVirtualIp: dnsVirtualIp,
      homerVirtualIp: homerVirtualIp,
    };

    Axios.post(`${url}/api/topology/virtualIps`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleOnChangeDatabaseVirtualIp = (value) => {
    setDatabaseVirtualIp(value);
  };
  const handleOnChangeDnsVirtualIp = (value) => {
    setDnsVirtualIp(value);
  };
  const handleOnChangeHomerVirtualIp = (value) => {
    setHomerVirtualIp(value);
  };
  // return <div class="virtual-ips"></div>;
  return (
    <div className={classNames(classes["virtual-ips"])}>
      <form onSubmit={handleSubmit}>
        <div className={classNames(classes["virtual-ips-title"])}>
          Virtual IPs for Load Balancers
        </div>
        <VirtualIpInput
          mainTitle={"Database Virtual IP"}
          subTitle={"Main database used by IMS services"}
          onChange={handleOnChangeDatabaseVirtualIp}
        />
        <VirtualIpInput
          mainTitle={"DNS Server Virtual IP"}
          subTitle={"Internal DNS server used by IMS services"}
          onChange={handleOnChangeDnsVirtualIp}
        />
        <VirtualIpInput
          mainTitle={"Homer Virtual IP"}
          subTitle={"Used for monitoring SIP flows"}
          onChange={handleOnChangeHomerVirtualIp}
        />

        <MyButton
          title={"Save"}
          className={classes["virtual-ips-save-button"]}
        />
      </form>
    </div>
  );
};

export { VirtualIps };
