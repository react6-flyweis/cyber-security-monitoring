import { Routes, Route } from "react-router";
import { lazy } from "react";

import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

const DashboardPage = lazy(() => import("@/pages/Dashboard"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
