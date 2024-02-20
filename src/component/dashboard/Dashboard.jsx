import { Routes, Route } from "react-router-dom";
import Toolbar from "../header/toolbar/Toolbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import AppRoutes from "../../routes";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="main-body">
        <Toolbar />
        <Content>
          <Routes>
            {AppRoutes.map((prop, key) => {
              return <Route path={prop.path} element={<prop.element />} />;
            })}
          </Routes>
        </Content>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
