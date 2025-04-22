// src/pages/WaitersPage.jsx
import React from "react";
import Waiter from "../components/Waiter.jsx";

function WaitersPage() {
  return (
    <div>
      <h2>Waiters</h2>
      <Waiter name="Michael" serving="Table 5" />
    </div>
  );
}

export default WaitersPage;
