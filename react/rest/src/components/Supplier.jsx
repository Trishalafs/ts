// src/components/Supplier.jsx
import React, { useState } from "react";

function Supplier({ name, items: initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [showItems, setShowItems] = useState(true);

  const style = {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div style={style}>
      <p>
        <strong>Supplier:</strong> {name}
      </p>
      <button onClick={() => setShowItems(!showItems)}>
        {showItems ? "Hide Supplies" : "Show Supplies"}
      </button>
      {showItems && (
        <>
          <p>
            <strong>Supplies:</strong> {items.join(", ")}
          </p>
          <input
            type="text"
            placeholder="Add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={addItem}>Add Item</button>
        </>
      )}
    </div>
  );
}

export default Supplier;
