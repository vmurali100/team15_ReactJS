import { useState } from "react";

export function Vegetables() {
  const [myvegetables, setvegetables] = useState("brinjal");
  return (
    <div>
      <h5>vegetables: {myvegetables}</h5>
      <button
        onClick={() => {
          setvegetables("bittergaurd !!")
        }}
      >
        vegetables
      </button>
    </div>
  );
}
