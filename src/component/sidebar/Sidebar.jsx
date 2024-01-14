import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import classNames from "classnames";
import { Logo } from "../icons/Logo";
import { TopologyIcon } from "../icons/TopologyIcon";
import { ConfigurationIcon } from "../icons/ConfigurationIcon";
import { MonitoringIcon } from "../icons/MonitoringIcon";
import { TroubleshootingIcon } from "../icons/TroubleshootingIcon";

import { Test } from "../icons/test";

const Sidebar = () => {
  return (
    <div class="sidebar" className={classNames(classes["sidebar"])}>
      <div
        className={classNames(
          classes["sidebar-account-info"],
          "d-flex",
          "flex-column",
          "justify-content-around",
          "align-items-center"
        )}
      >
        <div
          className={classNames(
            classes["sidebar-account-info-name"],
            "d-flex",
            "flex-column",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <span
            className={classNames(
              classes["sidebar-account-info-Saleh-username"],
              "text-center"
            )}
          >
            Saleh Zekavati
          </span>
          <span
            className={classNames(
              classes["sidebar-account-info-username"],
              "text-center"
            )}
          >
            username
          </span>
        </div>
      </div>

      <div
        className={classNames(
          classes["sidebar-topology-icon"],
          classes["sidebar-icons"],
          "d-flex",
          "align-items-center"
        )}
      >
        <Link
          to="/topology"
          className={classNames(
            classes["sidebar-topology-icon-content"],
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <TopologyIcon />
          <span>TOPOLOGY</span>
        </Link>
      </div>

      <div
        className={classNames(
          classes["sidebar-icons"],
          "d-flex",
          "align-items-center"
        )}
      >
        <Link
          to="/configuration"
          className={classNames(
            classes["sidebar-configuration-icon-content"],
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <ConfigurationIcon />

          <span>CONFIGURATION</span>
        </Link>
      </div>

      <div
        className={classNames(
          classes["sidebar-icons"],
          "d-flex",
          "align-items-center"
        )}
      >
        <Link
          to="/monitoring"
          className={classNames(
            classes["sidebar-monitoring-icon-content"],
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <MonitoringIcon />
          <span>MONITORING</span>
        </Link>
      </div>

      <div
        className={classNames(
          classes["sidebar-icons"],
          "d-flex",
          "align-items-center"
        )}
      >
        <Link
          to="/troubleshooting"
          className={classNames(
            classes["sidebar-troubleshooting-icon-content"],
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <TroubleshootingIcon />
          <span>TROUBLESHOOTING</span>
        </Link>
      </div>

      <button className={classNames(classes["sidebar-button"])}>
        Save & Restart
      </button>
      <div className={classNames(classes["sidebar-logo"])}>
        <Logo />
      </div>
    </div>
  );
};

export default Sidebar;
