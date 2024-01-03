import React, { useState } from "react";
import Axios from "axios";
import "./VirtualIps.css";
import { VirtualIpInput } from "./virtualIpInput";

const VirtualIps = () => {
  const [databaseVirtualIp, setDatabaseVirtualIp] = useState();
  const [dnsVirtualIp, setDnsVirtualIp] = useState();
  const [homerVirtualIp, setHomerVirtualIp] = useState();

  const url = "https://88d188a7-0705-4aa4-b0f9-0d2781378c89.mock.pstmn.io";

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
    <div class="virtual-ips">
      <form id="virtual-ips-form" onSubmit={handleSubmit}>
        <div class="virtual-ips-title">Virtual IPs for Load Balancers</div>
        <VirtualIpInput
          mainTitle={"Database Virtual IP*"}
          subTitle={"Main database used by IMS services"}
          onChange={handleOnChangeDatabaseVirtualIp}
        />
        <VirtualIpInput
          mainTitle={"DNS Server Virtual IP*"}
          subTitle={"Internal DNS server used by IMS services"}
          onChange={handleOnChangeDnsVirtualIp}
        />
        <VirtualIpInput
          mainTitle={"Homer Virtual IP*"}
          subTitle={"Used for monitoring SIP flows"}
          onChange={handleOnChangeHomerVirtualIp}
        />

        <button type="submit" class="virtual-ips-save-button topology-buttton">
          Save
        </button>
      </form>
    </div>
  );
};

export { VirtualIps };
