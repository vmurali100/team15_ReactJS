import { useState } from "react";

export function Dilliage() {
  const [StudentName, setStudentName] = useState("18");
  return (
    <div>
      <h1> my name is : {StudentName}</h1>
      <button
        onClick={() => {
          setStudentName("24 !!");
        }}
      >
        Change Age
      </button>
    </div>
  );
}
