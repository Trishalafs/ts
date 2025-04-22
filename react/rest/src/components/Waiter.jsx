// src/components/Waiter.jsx
import React, { useState } from "react";

function Waiter({ name, serving: initialServing }) {
  const [serving, setServing] = useState(initialServing);
  const [isEditing, setIsEditing] = useState(false);
  const [tempServing, setTempServing] = useState(serving);

  const style = {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  const handleSave = () => {
    setServing(tempServing);
    setIsEditing(false);
  };

  return (
    <div style={style}>
      <p>
        <strong>Waiter:</strong> {name}
      </p>
      {isEditing ? (
        <>
          <input
            type="text"
            value={tempServing}
            onChange={(e) => setTempServing(e.target.value)}
          />
          <button onClick={handleSave}>Save Table</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>
            <strong>Serving:</strong> {serving}
          </p>
          <button onClick={() => setIsEditing(true)}>Change Table</button>
        </>
      )}
    </div>
  );
}

export default Waiter;
