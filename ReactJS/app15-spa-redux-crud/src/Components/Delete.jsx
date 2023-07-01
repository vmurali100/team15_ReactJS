import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Delete = () => {
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state.usr);
  useEffect(() => {
    setUser(state.usr);
  });

  const handleDelete = async () => {
    const response = await fetch("http://localhost:3000/users/" + user.id, {
      method: "DELETE",
    });
    const result = await response.json();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to Delete User Component !</h2>
      <h2>User Details </h2>
      <ul>
        <li>First Name : {user.fname}</li>
        <li>Last Name : {user.lname}</li>
        <li>Email : {user.email}</li>
      </ul>

      <h2 style={{ color: "red" }}>Are you Sure to Delete This User... ?</h2>
      <button className="btn btn-danger" onClick={handleDelete}>
        Confirm Delete
      </button>
    </div>
  );
};

export default Delete;
