// src/App.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CustomersPage from "./pages/CustomersPage.jsx";
import WaitersPage from "./pages/WaitersPage.jsx";
import FoodPage from "./pages/FoodPage.jsx";
import SuppliersPage from "./pages/SuppliersPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Restaurant Management System </h1>
      
      {/* Navigation Bar */}
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "15px", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/waiters">Waiters</Link></li>
          <li><Link to="/food">Food Menu</Link></li>
          <li><Link to="/suppliers">Suppliers</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
      
      <hr />
      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/waiters" element={<WaitersPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
