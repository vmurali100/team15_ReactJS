import { useState } from "react";

export function Serial1() {
  const [serialName, setSerialName] = useState("Ravoyi Chandamama");
  return (
    <div>
      <h2>Serial Name is:{serialName}</h2>
      <button
        onClick={() => {
          setSerialName("Kokilamma");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
