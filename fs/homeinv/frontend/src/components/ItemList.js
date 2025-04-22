import React from "react";
import { deleteItem } from "../api";

const ItemList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} - {item.quantity} ({item.category}) 
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
