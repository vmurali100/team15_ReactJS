import { useState } from "react";

export function Webseries2() {
  const [webseriesName, setWebseriesName] = useState("Ishq");
  return (
    <div>
      <h2>webseriesName is:{webseriesName}</h2>
      <button
        onClick={() => {
          setWebseriesName("Girlfriend");
        }}
      >
        webseriesName Changed
      </button>
    </div>
  );
}