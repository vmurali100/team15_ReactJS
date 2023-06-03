import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <div>
      <h2>Welcome to Grand parent Componet</h2>
      <hr />
      <Parent />
    </div>
  );
};

export default GrandParent;
