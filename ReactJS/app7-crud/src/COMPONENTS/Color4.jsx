import { useState } from "react";

export function Color4() {
  const [mycolor4, setcolor4] = useState("ash");
  return (
    <div>
      <h6>color4 : {mycolor4}</h6>
      <button
        onClick={() => {
          setcolor4("clay !!")
        }}
      >
        color4
      </button>
    </div>
  );
}
