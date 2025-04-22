import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

// Fetch all items
export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new item
export const addItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

// Delete an item
export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
