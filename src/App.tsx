import { Routes, Route } from "react-router";
import { lazy } from "react";
import { Layout } from "@/components/Layout";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthWrapper } from "./components/AuthWrapper";

const Login = lazy(() => import("@/pages/Login"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const DevicesPage = lazy(() => import("@/pages/Devices"));
const DetectionResponsePage = lazy(() => import("@/pages/DetectionResponse"));

function App() {
  return (
      <Routes>
        <Route
          element={
            <AuthWrapper>
              <AuthLayout />
            </AuthWrapper>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route
            path="/detection-response"
            element={<DetectionResponsePage />}
          />
        </Route>
      </Routes>
  );
}

export default App;
