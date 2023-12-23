import Topology from "../pages/topology";
import Configuration from "../pages/configuration";
import Monitoring from "../pages/monitoring";
import Login from "../pages/login";
import Troubleshooting from "../pages/troubleshooting";

const AppRoutes = [
  {
    path: "/topology",
    element: Topology,
  },
  {
    path: "/configuration",
    element: Configuration,
  },
  {
    path: "/monitoring",
    element: Monitoring,
  },
  {
    path: "/troubleshooting",
    element: Troubleshooting,
  },
];

export default AppRoutes;
