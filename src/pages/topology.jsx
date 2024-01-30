import React, { useState } from "react";
import { NetworkDefinition } from "../component/dashboard/topology/NetworkDefinition";
import { Node } from "../component/dashboard/topology/Node";
import { VirtualIps } from "../component/dashboard/topology/VirtualIps";
import { ErrorContext } from "../../src/context/ErrorContext";

const Topology = () => {
  const [error, setError] = useState({ hasError: false });

  const toggleError = () => {
    setError((oldTheme) => ({ ...oldTheme, isDarkMode: !oldTheme.isDarkMode }));
  };

  return (
    <ErrorContext.Provider value={{ error, toggleError }}>
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
    </ErrorContext.Provider>
  );
};

export default Topology;
