import { Routes, Route } from "react-router-dom";
import classNames from "classnames";
import classes from "./Dashboard.module.css";
import Toolbar from "../header/toolbar/Toolbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import AppRoutes from "../../routes";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className={classNames(classes["main-body"])}>
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
};

export default Dashboard;
