import { useState } from "react";

export function Course1() {
  const [mycourse1, setcourse1] = useState("civil");
  return (
    <div>
      <h5>course1: {mycourse1}</h5>
      <button
        onClick={() => {
          setcourse1("mechanical !!")
        }}
      >
        course1
      </button>
    </div>
  );
}
