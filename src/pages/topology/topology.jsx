import React, { useState, useEffect } from "react";
import { NetworkDefinition } from "../../component/dashboard/topology/networkDefinition/NetworkDefinition";
import { Node } from "../../component/dashboard/topology/node/Node";
import { VirtualIps } from "../../component/dashboard/topology/virtualIps/VirtualIps";
import { TopologyDataContext } from "../../context/TopologyDataContext";
import Axios from "axios";

const Topology = () => {
  const url = "https://35a474cb-4d59-4846-8b43-fc913daf7a5f.mock.pstmn.io";
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

  useEffect(() => {
    getNetworkInfo();
  }, []);

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
