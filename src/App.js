import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./default";
import Login from "./pages/login/login";
import Dashboard from "./component/dashboard/Dashboard";
import NotFound from "./notFound";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
