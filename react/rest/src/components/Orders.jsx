// src/components/Orders.jsx
import React, { useState, useRef } from "react";

function Orders() {
  // Initial orders with status, timestamp, and optional waiter
  const [orders, setOrders] = useState([
    { id: 1, customer: "Alice", food: "Burger", status: "Pending", timestamp: new Date().toLocaleTimeString(), waiter: "" },
    { id: 2, customer: "Bob", food: "Pasta", status: "Pending", timestamp: new Date().toLocaleTimeString(), waiter: "" },
  ]);

  const [customerName, setCustomerName] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Refs for DOM manipulation
  const inputRef = useRef(null);
  const ordersEndRef = useRef(null);

  // Add new order function with timestamp
  const addOrder = () => {
    if (customerName.trim() && foodItem.trim()) {
      const newOrder = {
        id: orders.length + 1,
        customer: customerName,
        food: foodItem,
        status: "Pending",
        timestamp: new Date().toLocaleTimeString(),
        waiter: "",
        isNew: true, // flag to highlight new orders
      };
      setOrders([...orders, newOrder]);
      setCustomerName("");
      setFoodItem("");

      // Auto-focus on the customer name input field
      inputRef.current.focus();

      // Auto-scroll to the new order
      setTimeout(() => {
        ordersEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      // Remove highlight after 2 seconds
      setTimeout(() => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === newOrder.id ? { ...order, isNew: false } : order
          )
        );
      }, 2000);
    }
  };

  // Update order status function
  const updateOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Delete order function
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Assign a waiter to an order
  const assignWaiter = (id) => {
    const waiterName = prompt("Enter the waiter's name:");
    if (waiterName && waiterName.trim() !== "") {
      setOrders(
        orders.map((order) =>
          order.id === id ? { ...order, waiter: waiterName } : order
        )
      );
    }
  };

  // Filter orders based on selected status
  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  // Styling for order cards
  const orderCardStyle = (order) => ({
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: order.isNew ? "#fef9c3" : "#fff",
  });

  return (
    <div>
      <h2>Current Orders</h2>

      {/* Filter dropdown */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="filter">Filter Orders:&nbsp;</label>
        <select
          id="filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Preparing">Preparing</option>
          <option value="Served">Served</option>
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div>
          {filteredOrders.map((order) => (
            <div key={order.id} style={orderCardStyle(order)}>
              <p>
                <strong>{order.customer}</strong> ordered{" "}
                <strong>{order.food}</strong>
              </p>
              <p>
                <strong>Status:</strong> <em>{order.status}</em>
              </p>
              <p>
                <strong>Time:</strong> {order.timestamp}
              </p>
              {order.waiter && (
                <p>
                  <strong>Waiter:</strong> {order.waiter}
                </p>
              )}
              <div>
                {/* Depending on the current status, show appropriate buttons */}
                {order.status === "Pending" && (
                  <button
                    onClick={() =>
                      updateOrderStatus(order.id, "Preparing")
                    }
                  >
                    Start Preparing
                  </button>
                )}
                {order.status === "Preparing" && (
                  <>
                    <button
                      onClick={() =>
                        updateOrderStatus(order.id, "Served")
                      }
                    >
                      Mark as Served
                    </button>
                    <button
                      onClick={() => assignWaiter(order.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Assign Waiter
                    </button>
                  </>
                )}
                <button
                  onClick={() => deleteOrder(order.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))}
          {/* A reference element for auto-scroll */}
          <div ref={ordersEndRef} />
        </div>
      )}

      <h3>Add New Order</h3>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          ref={inputRef} // Auto-focus reference
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Food Item"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addOrder}>Add Order</button>
      </div>

      <div>
        <h2>Chef's Station</h2>
        {orders.filter((order) => order.status !== "Served").length === 0 ? (
          <p>No orders pending.</p>
        ) : (
          <ul>
            {orders
              .filter((order) => order.status !== "Served")
              .map((order) => (
                <li key={order.id}>
                  Prepare {order.food} for {order.customer} (
                  {order.status})
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Orders;
