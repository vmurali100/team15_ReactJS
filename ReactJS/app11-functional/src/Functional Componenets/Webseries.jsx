import { useState } from "react";

export function Webseries() {
  const [webseriesName, setWebseriesName] = useState("Surya");
  return (
    <div>
      <h2>Webseries Name is:{webseriesName}</h2>
      <button
        onClick={() => {
          setWebseriesName("Pitta Kathalu");
        }}
      >
        Change webseriesName
      </button>
    </div>
  );
}
