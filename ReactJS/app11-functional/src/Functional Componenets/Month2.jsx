import { useState } from "react";

export function Month2() {
  const [monthName, setMonthName] = useState("May");
  return (
    <div>
      <h2>monthName is:{monthName}</h2>
      <button
        onClick={() => {
          setMonthName("June");
        }}
      >
        monthName Changed
      </button>
    </div>
  );
}
