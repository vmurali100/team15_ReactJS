import React from "react";
import { UserContextConsumer } from "./UserContext";

const Child = () => {
  return (
    <div>
      <h2>Welcome to Child Component !! </h2>
      <UserContextConsumer>
        {(value) => {
          return (
            <h2 style={{ color: "green" }}>
              Message Received From Main is : {value} . Called Props Drill down
            </h2>
          );
        }}
      </UserContextConsumer>
    </div>
  );
};

export default Child;
