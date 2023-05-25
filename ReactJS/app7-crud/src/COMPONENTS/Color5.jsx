import { useState } from "react";

export function Color5() {
  const [mycolor5, setcolor5] = useState("skyblue");
  return (
    <div>
      <h5>color5: {mycolor5}</h5>
      <button
        onClick={() => {
          setcolor5("peach !!")
        }}
      >
        color5
      </button>
    </div>
  );
}
