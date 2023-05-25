/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Guna() {
  const [StudentName, setStudentName] = useState("Guna");
  return (
    <div>
      <h1> my friend name is : {StudentName}</h1>
      <button
        onClick={() => {
          setStudentName("Guna Reddy !!");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
