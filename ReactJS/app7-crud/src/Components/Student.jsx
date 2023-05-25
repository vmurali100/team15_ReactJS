import { useState } from "react";

export function Student() {
  const [stuentName, setStudentName] = useState("Ram");
  return (
    <div>
      <h2>Student Name is : {stuentName}</h2>
      <button
        onClick={() => {
          setStudentName("Rama Krishna !!");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
