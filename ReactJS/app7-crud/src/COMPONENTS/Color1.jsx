import { useState } from "react";

export function Color1() {
  const [mycolor, setcolor] = useState("red");
  return (
    <div>
      <h1>Color1 : {mycolor}</h1>
      <button
        onClick={() => {
          setcolor("green !!");
        }}
      >
        Color1
      </button>
    </div>
  );
}
