import React from "react";
import { useState } from "react";
import { TeachercontextProvider } from "../CONTEXT/Teachercontext";
import Sathvikaparent from "./Sathvikaparent";

const Harithateacher = () => {
  const [message, setMessage] = useState("Welcome to Chittoor !!");
  return (
    <div>
      <h2>Welcome to Harithateacher Component !!</h2>
      <hr />
      <TeachercontextProvider value={message}>
        <Sathvikaparent />
      </TeachercontextProvider>
    </div>
  );
};

export default Harithateacher;