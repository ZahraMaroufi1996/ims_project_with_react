import React, { useState, useEffect } from "react";
import { NetworkDefinition } from "../component/dashboard/topology/NetworkDefinition";
import { Node } from "../component/dashboard/topology/Node";
import { VirtualIps } from "../component/dashboard/topology/VirtualIps";
// import { ErrorContext } from "../../src/context/ErrorContext";
import { TopologyDataContext } from "../../src/context/TopologyDataContext";
import Axios from "axios";
import { ErrorShow } from "../component/dashboard/ErrorShow";

const Topology = () => {
  const [error, setError] = useState();
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";
  const [topologyData, setTopologyData] = useState(undefined);

  const toggleTopologyData = (value) => {
    setTopologyData(value);
  };

  const getNetworkInfo = () => {
    Axios.get(`${url}/api/topology`)
      .then((response) => {
        setError("Sdfsdf");
        console.log(response.data);
        setTopologyData(response.data);
        // setSubnet(response.data.subnetMask);
        // setGateWay(response.data.gateway);
        // toggleError("success");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  console.log(topologyData);
  useEffect(() => {
    getNetworkInfo();
  }, []);

  return (
    // <ErrorContext.Provider value={{ error, toggleError }}>
    <TopologyDataContext.Provider value={{ topologyData, toggleTopologyData }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          height: "100%",
        }}
      >
        <div>
          <NetworkDefinition />
        </div>
        <div style={{ display: "flex" }}>
          <Node />
          <VirtualIps />
        </div>
      </div>
    </TopologyDataContext.Provider>
    // </ErrorContext.Provider>
  );
};

export default Topology;
