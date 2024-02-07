import React, { useState, useEffect } from "react";
import { NetworkDefinition } from "../component/dashboard/topology/NetworkDefinition";
import { Node } from "../component/dashboard/topology/Node";
import { VirtualIps } from "../component/dashboard/topology/VirtualIps";
import { TopologyDataContext } from "../../src/context/TopologyDataContext";
import Axios from "axios";

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
        setTopologyData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // useEffect(() => {
  //   getNetworkInfo();
  // }, []);

  return (
    <TopologyDataContext.Provider value={{ topologyData, toggleTopologyData }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
  );
};

export default Topology;
