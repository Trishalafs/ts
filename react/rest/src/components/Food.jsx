// src/components/Food.jsx
import React, { useState } from "react";

function Food({ name, ingredients }) {
  const [showIngredients, setShowIngredients] = useState(false);

  const style = {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      <p>
        <strong>Food Item:</strong> {name}
      </p>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showIngredients && (
        <p>
          <strong>Ingredients:</strong> {ingredients.join(", ")}
        </p>
      )}
    </div>
  );
}

export default Food;
