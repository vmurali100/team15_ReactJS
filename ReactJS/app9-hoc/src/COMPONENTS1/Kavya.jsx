import React from "react";
import { TeachercontextConsumer } from "../CONTEXT/Teachercontext";

const Kavya = () => {
  return (
    <div>
      <h2>Welcome to Kavya Component !! </h2>
      <TeachercontextConsumer>
        {(value) => {
          return (
            <h2 style={{ color: "blue" }}>
              Message Received From Harithateacher is : {value} . This is teachers form !!
            </h2>
          );
        }}
      </TeachercontextConsumer>
    </div>
  );
};

export default Kavya;