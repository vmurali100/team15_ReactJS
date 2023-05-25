import { useState } from "react";

export function Serial2() {
  const [serialName, setSerialName] = useState("Manasantha Nuvve");
  return (
    <div>
      <h2>Serial Name is:{serialName}</h2>

      <button
        onClick={() => {
          setSerialName("Rangula Ratnam");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
