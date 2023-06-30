import React from "react";
import { Outlet } from "react-router-dom";

const Siva = () => {
  return (
    <div>
      <h1>Welcome to Curd Application</h1>
      <Outlet />
    </div>
  );
};
export default Siva;
