// src/pages/CustomersPage.jsx
import React from "react";
import CustomerList from "../components/Customer.jsx";

function CustomersPage() {
  return (
    <div>
      {/* The CustomerList already includes the heading "Customers" */}
      <CustomerList />
    </div>
  );
}

export default CustomersPage;
