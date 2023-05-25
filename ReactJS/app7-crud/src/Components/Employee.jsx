import { useState } from "react";

export function Employee() {
  const [myVariable, setVariable] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setVariable(15);
        }}
      >
        Change Value
      </button>
      <h2>My Variable Value is : {myVariable}</h2>
    </div>
  );
}
