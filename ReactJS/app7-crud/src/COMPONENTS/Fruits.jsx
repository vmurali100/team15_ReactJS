import { useState } from "react";

export function Fruits() {
  const [myfruits, setfruits] = useState("apple");
  return (
    <div>
      <h5>fruits: {myfruits}</h5>
      <button
        onClick={() => {
          setfruits("mango !!")
        }}
      >
        fruits
      </button>
    </div>
  );
}
