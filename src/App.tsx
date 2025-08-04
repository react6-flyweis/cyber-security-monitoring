import { Routes, Route } from "react-router";
import { lazy } from "react";

import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const DevicesPage = lazy(() => import("@/pages/Devices"));
const DetectionResponsePage = lazy(() => import("@/pages/DetectionResponse"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-8 px-14">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route
              path="/detection-response"
              element={<DetectionResponsePage />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
