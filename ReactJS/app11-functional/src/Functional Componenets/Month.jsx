import { useState } from "react";

export function Month() {
  const [monthName, setMonthName] = useState("January");
  return (
    <div>
      <h2>monthName is:{monthName}</h2>
      <button
        onClick={() => {
          setMonthName("February");
        }}
      >
        Change Month
      </button>
    </div>
  );
}
