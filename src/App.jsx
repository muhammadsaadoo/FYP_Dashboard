import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import logIn2 from "../loginimage/login2.png"; // Make sure this path is correct

import Sidebar from "./components/common/Sidebar";
import AdminLoginForm from "./components/common/AdminLoginForm";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    const staticUsername = "msn@gmail.com";
    const staticPassword = "123";
    if (username === staticUsername && password === staticPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <>
      {/* Login View */}
      {!isAuthenticated ? (
        <div
          className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 bg-cover bg-center"
          style={{
            backgroundImage: `url(${logIn2})`, // Corrected here
          }}
        >
          <AdminLoginForm onLogin={handleLogin} />
        </div>
      ) : (
        // Authenticated View
        <div className="flex min-h-screen bg-gray-900 text-gray-100">
          {/* Sidebar */}
          <Sidebar />

          {/* Content Area */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/sales" element={<SalesPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
