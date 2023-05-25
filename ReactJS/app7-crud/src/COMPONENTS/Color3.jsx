import { useState } from "react";

export function Color3() {
  const [myColor3, setColor3] = useState("violet");
  return (
    <div>
      <h5>Color3 : {myColor3}</h5>
      <button
        onClick={() => {
          setColor3("blue !!")
        }}
      >
        Color3
      </button>
    </div>
  );
}
