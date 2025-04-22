// frontend/src/pages/Home.js
import React, { useEffect, useState } from "react";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";
import { getItems } from "../api";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <ItemForm onAdd={handleAddItem} />
      <ItemList items={items} onDelete={handleDeleteItem} />
    </div>
  );
};

export default Home;
