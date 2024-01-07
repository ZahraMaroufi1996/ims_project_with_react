import React from "react";
import { General } from "../component/dashboard/cofiguration/General";
import { Pcscf } from "../component/dashboard/cofiguration/Pcscf";
import { Icscf } from "../component/dashboard/cofiguration/Icscf";
import { Scscf } from "../component/dashboard/cofiguration/Scscf";
// import { RtpProxy } from "../component/dashboard/cofiguration/RtpProxy";

import classes from "./configuration.module.css";
import classNames from "classnames";

const Configuration = () => {
  return (
    <div className={classNames(classes["main-content"], "d-flex", "flex-row ")}>
      <div className="d-flex flex-column">
        <General />
        <Pcscf />
      </div>
      <div className="d-flex flex-column">
        <Icscf />
        <Scscf />
        {/* <RtpProxy /> */}
      </div>
    </div>
  );
};

export default Configuration;