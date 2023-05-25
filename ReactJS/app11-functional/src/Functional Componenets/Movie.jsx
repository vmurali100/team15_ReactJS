import { useState } from "react";

export function Movie() {
  const [movieName, setMovieName] = useState("Athadu");
  return (
    <div>
      <h2>Movie Name is:{movieName}</h2>
      <button
        onClick={() => {
          setMovieName("Nijam");
        }}
      >
        Movie Name Changed
      </button>
    </div>
  );
}
