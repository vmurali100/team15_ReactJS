import React from "react";
import Child from "./Child";

const GrandChild = () => {
  return (
    <div>
      <h2>Welcome to Grand Child Component !!</h2>
      <hr />
      <Child />
    </div>
  );
};

export default GrandChild;
