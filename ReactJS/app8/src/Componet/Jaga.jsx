/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Jaga() {
  const [StudentName, setStudentName] = useState("Jaga");
  return (
    <div>
      <h1> my friend name is : {StudentName}</h1>
      <button
        onClick={() => {
          setStudentName("Jagadeesh !!");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
