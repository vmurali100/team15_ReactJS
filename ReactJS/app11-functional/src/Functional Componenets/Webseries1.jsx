import { useState } from "react";

export function Webseries1() {
  const [webseriesName, setWebseriesName] = useState("Mrs.Kumari");
  return (
    <div>
      <h2>webseriesName is:{webseriesName}</h2>
      <button
        onClick={() => {
          setWebseriesName("Neetho Jathagaa");
        }}
      >
        webseriesName Changed
      </button>
    </div>
  );
}