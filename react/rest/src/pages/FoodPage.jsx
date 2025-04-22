// src/pages/FoodPage.jsx
import React from "react";
import Food from "../components/Food.jsx";

function FoodPage() {
  return (
    <div>
      <h2>Food Menu</h2>
      <Food name="Pizza" ingredients={["Cheese", "Tomato", "Bread"]} />
      <Food name="Burger" ingredients={["Bun", "Lettuce", "Patty"]} />
    </div>
  );
}

export default FoodPage;
