import { useState } from "react";

export function Course2() {
  const [mycourse2, setcourse2] = useState("cse");
  return (
    <div>
      <h5>course2: {mycourse2}</h5>
      <button
        onClick={() => {
          setcourse2("ece !!")
        }}
      >
        course2
      </button>
    </div>
  );
}
