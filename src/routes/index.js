import Topology from "../pages/topology/topology";
import Configuration from "../pages/configuration/configuration";
import Monitoring from "../pages/monitoring/monitoring";
import Troubleshooting from "../pages/troubleshooting/troubleshooting";

const AppRoutes = [
  {
    path: "topology",
    element: Topology,
  },
  {
    path: "configuration",
    element: Configuration,
  },
  {
    path: "monitoring",
    element: Monitoring,
  },
  {
    path: "troubleshooting",
    element: Troubleshooting,
  },
];

export default AppRoutes;
