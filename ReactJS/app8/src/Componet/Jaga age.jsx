/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export  function JagaAge() {
  const [stuentName, setStudentName] = useState("18");
  return (
    <div>
      <h2>my friend Age: {stuentName}</h2>
      <button
        onClick={() => {
          setStudentName("24 !!");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
