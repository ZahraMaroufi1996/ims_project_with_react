import { Route, Routes } from "react-router-dom";
import { NmsTopology } from "../../pages/topology";
import { Layout, PortMappingPage, ProtectedRoute } from "shared-components";
import { Discovery } from "../../pages/discovery";
import { Fault } from "../../pages";

export const Dashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="topology">
          <Route
            index
            element={
              <ProtectedRoute>
                <NmsTopology />
              </ProtectedRoute>
            }
          />
          <Route
            path="portmapping"
            element={
              <ProtectedRoute>
                <PortMappingPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="fault" element={<Fault />} />
        <Route path="discovery" element={<Discovery />} />
      </Routes>
    </Layout>
  );
};
