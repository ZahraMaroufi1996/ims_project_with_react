import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Topology from "./pages/topology";
// import Configuration from "./pages/configuration";
// import Monitoring from "./pages/monitoring";
// import Troubleshooting from "./pages/troubleshooting";
import Toolbar from "../header/Toolbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Content from "../content/Content";

import AppRoutes from "../../routes";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Router>
      <Sidebar />
      <div className="main-body">
        <Toolbar />
        <Content>
          <Routes>
            {AppRoutes.map((prop, key) => {
              return <Route path={prop.path} element={<prop.element />} />;
            })}

            {/* <Route path="/" element={<Topology />} />
             <Route path="/login" element={<Login />} /> }
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} /> */}
          </Routes>
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default Dashboard;
