import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./component/dashboard/Dashboard";

import AppRoutes from "./routes";
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
