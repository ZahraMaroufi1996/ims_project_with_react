import React from "react";
import { NetworkDefinition } from "../component/dashboard/topology/NetworkDefinition";
import { Node } from "../component/dashboard/topology/Node";
import { VirtualIps } from "../component/dashboard/topology/VirtualIps";

const Topology = () => {
  return (
    <>
      <NetworkDefinition />
      <div class="d-flex flex-row">
        <Node />
        <VirtualIps />
      </div>
    </>
  );
};

export default Topology;
