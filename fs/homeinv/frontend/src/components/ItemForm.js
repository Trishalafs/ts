import React, { useState } from "react";
import { addItem } from "../api";

const ItemForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !category) return;

    const newItem = { name, quantity: Number(quantity), category };
    const addedItem = await addItem(newItem);
    
    onAdd(addedItem);
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
