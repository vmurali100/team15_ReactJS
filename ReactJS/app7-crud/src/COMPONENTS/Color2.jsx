import { useState } from "react";

export function Color2() {
  const [mycolor2, setcolor2] = useState("yellow");
  return (
    <div>
      <h5>color2 : {mycolor2}</h5>
      <button
        onClick={() => {
          setcolor2("gray !!")
        }}
      >
        Color2
      </button>
    </div>
  );
}
