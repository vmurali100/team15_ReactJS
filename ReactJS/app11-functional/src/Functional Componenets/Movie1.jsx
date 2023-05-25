import { useState } from "react";

export function Movie1() {
  const [movieName, setMovieName] = useState("Sri Manjunatha");
  return (
    <div>
      <h2>Movie Name is:{movieName}</h2>
      <button
        onClick={() => {
          setMovieName("SriRamadasu");
        }}
      >
        Movie Name Changed
      </button>
    </div>
  );
}
