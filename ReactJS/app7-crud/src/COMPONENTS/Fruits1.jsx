import { useState } from "react";

export function Fruits1() {
  const [myFruits1, setFruits1] = useState("grapes");
  return (
    <div>
      <h5>Fruits1: {myFruits1}</h5>
      <button
        onClick={() => {
          setFruits1("watermelon !!")
        }}
      >
        Fruits1
      </button>
    </div>
  );
}

