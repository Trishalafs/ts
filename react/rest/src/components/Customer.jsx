// src/components/Customer.jsx
import React, { useState, useEffect } from "react";

// Component to display and edit a single customer's details.
function Customer({ name, order, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempOrder, setTempOrder] = useState(order);

  const containerStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <p>
        <strong>Customer:</strong> {name}
      </p>
      {isEditing ? (
        <>
          <input
            type="text"
            value={tempOrder}
            onChange={(e) => setTempOrder(e.target.value)}
          />
          <button
            onClick={() => {
              onUpdate(name, tempOrder);
              setIsEditing(false);
            }}
          >
            Save Order
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>
            <strong>Order:</strong> {order}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit Order</button>
          <button onClick={() => onDelete(name)}>Delete Customer</button>
        </>
      )}
    </div>
  );
}

// Component to manage a list of customers and add new ones.
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerOrder, setNewCustomerOrder] = useState("");

  // Load customer data from localStorage when component mounts
  useEffect(() => {
    if (typeof window === "undefined") {
      console.error("localStorage is not available on the server!");
      return;
    }
    
    const storedCustomers = localStorage.getItem("customers");
    console.log("Attempting to load customers from localStorage:", storedCustomers);
    
    if (storedCustomers) {
      try {
        const parsedCustomers = JSON.parse(storedCustomers);
        console.log("Parsed customers successfully:", parsedCustomers);
        setCustomers(parsedCustomers);
      } catch (error) {
        console.error("Error parsing stored customers:", error);
        // Optionally reset to default if parsing fails
        const defaultCustomers = [
          { name: "John", order: "Pizza" },
          { name: "Alice", order: "Burger" },
        ];
        setCustomers(defaultCustomers);
        localStorage.setItem("customers", JSON.stringify(defaultCustomers));
        console.log("Re-initialized with default customers due to parsing error.");
      }
    } else {
      console.log("No stored customers found. Initializing default customers.");
      const defaultCustomers = [
        { name: "John", order: "Pizza" },
        { name: "Alice", order: "Burger" },
      ];
      setCustomers(defaultCustomers);
      localStorage.setItem("customers", JSON.stringify(defaultCustomers));
    }
  }, []);
  
  
  
  // Save customer data to localStorage whenever the customers state changes
  useEffect(() => {
    console.log("Saving to localStorage:", customers);
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);
  

  

  // Function to add a new customer.
  const addCustomer = () => {
    if (newCustomerName.trim() && newCustomerOrder.trim()) {
      const updatedCustomers = [
        ...customers,
        { name: newCustomerName, order: newCustomerOrder },
      ];
      setCustomers(updatedCustomers);
      setNewCustomerName("");
      setNewCustomerOrder("");
    }
  };

  // Function to delete a customer by name.
  const deleteCustomer = (name) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.name !== name
    );
    setCustomers(updatedCustomers);
  };

  // Function to update the order of a customer.
  const updateCustomerOrder = (name, newOrder) => {
    const updatedCustomers = customers.map((customer) =>
      customer.name === name ? { ...customer, order: newOrder } : customer
    );
    setCustomers(updatedCustomers);
  };

  const formStyle = {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  return (
    <div>
      <h2>Customers</h2>
      {customers.map((customer) => (
        <Customer
          key={customer.name}
          name={customer.name}
          order={customer.order}
          onDelete={deleteCustomer}
          onUpdate={updateCustomerOrder}
        />
      ))}
      <div style={formStyle}>
        <h3>Add New Customer</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomerName}
          onChange={(e) => setNewCustomerName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Order"
          value={newCustomerOrder}
          onChange={(e) => setNewCustomerOrder(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addCustomer}>Add Customer</button>
      </div>
    </div>
  );
}

export default CustomerList;
