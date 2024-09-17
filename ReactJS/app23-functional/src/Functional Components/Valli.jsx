import React, { useState } from "react";

export default function Valli() {
  const [age, setage] = useState("17");
  return (
    <div>
      <h3>V age:{age}</h3>
      <button
        onClick={() => {
          setage("23");
        }}
      >
        change age
      </button>
    </div>
  );
}
