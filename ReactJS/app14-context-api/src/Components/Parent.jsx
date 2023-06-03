import React from "react";
import GrandChild from "./GrandChild";

const Parent = () => {
  return (
    <div>
      <h2>Welcome to Parent Component !!</h2>
      <hr />
      <GrandChild />
    </div>
  );
};

export default Parent;
