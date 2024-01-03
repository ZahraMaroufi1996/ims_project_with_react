import React from "react";
import { NetworkDefinition } from "../component/dashboard/topology/NetworkDefinition";
import { Node } from "../component/dashboard/topology/Node";
import { VirtualIps } from "../component/dashboard/topology/VirtualIps";

const Topology = () => {
  return (
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
  );
};

export default Topology;
