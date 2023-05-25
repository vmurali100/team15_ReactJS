import { useState } from "react";

export function Month1() {
  const [monthName, setMonthName] = useState("March");
  return (
    <div>
      <h2>monthName is:{monthName}</h2>
      <button
        onClick={() => {
          setMonthName("April");
        }}
      >
        monthName Changed
      </button>
    </div>
  );
}