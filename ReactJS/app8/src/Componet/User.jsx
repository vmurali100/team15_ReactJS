import { useState } from "react";

export  function Student() {
  const [stuentName, setStudentName] = useState("kiran");
  return (
    <div>
      <h2>Student Name is : {stuentName}</h2>
      <button
        onClick={() => {
          setStudentName("kiran kumar !!");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
