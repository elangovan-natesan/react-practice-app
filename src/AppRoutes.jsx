import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Shop from "./components/shop/Shop";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}
