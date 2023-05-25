import { useState } from "react";

export function Movie2() {
  const [movieName, setMovieName] = useState("Manmathudu");
  return (
    <div>
      <h2>Movie Name is:{movieName}</h2>
      <button
        onClick={() => {
          setMovieName("King");
        }}
      >
        Movie Name Changed
      </button>
    </div>
  );
}
