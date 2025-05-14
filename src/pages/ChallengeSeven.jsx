import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function ChallengeSeven() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  // Persist count in localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => Math.max(prev - 1, 0)); // Prevents going below 0
  }, []);

  return (
    <>
      <h2>Basic Counter with Local Storage</h2>
      <h2>{count}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </>
  );
}
