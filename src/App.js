import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./component/dashboard/Dashboard";
// import Configuration from "./pages/configuration";
// import Monitoring from "./pages/monitoring";
// import Troubleshooting from "./pages/troubleshooting";
// import Toolbar from "./component/header/Toolbar";
// import Sidebar from "./component/sidebar/Sidebar";
// import Footer from "./component/footer/Footer";
// import Content from "./component/content/Content";
// import Footer from "./component/footer/Footer";
// import Content from "./component/content/Content";

import AppRoutes from "./routes";
import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Sidebar />
//       <div className="main-body">
//         <Toolbar />
//         <Content>
//           <Routes>
//             {AppRoutes.map((prop, key) => {
//               return <Route path={prop.path} element={<prop.element />} />;
//             })}

//             {/* <Route path="/" element={<Topology />} />
//              <Route path="/login" element={<Login />} /> }
//             <Route path="/configuration" element={<Configuration />} />
//             <Route path="/monitoring" element={<Monitoring />} />
//             <Route path="/troubleshooting" element={<Troubleshooting />} /> */}
//           </Routes>
//         </Content>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

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
