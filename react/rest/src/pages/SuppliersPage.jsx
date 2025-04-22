// src/pages/SuppliersPage.jsx
import React from "react";
import Supplier from "../components/Supplier.jsx";

function SuppliersPage() {
  return (
    <div>
      <h2>Suppliers</h2>
      <Supplier name="John’s Vegetables" items={["Tomatoes", "Lettuce"]} />
      <Supplier name="Meat Co." items={["Chicken", "Beef"]} />
    </div>
  );
}

export default SuppliersPage;
