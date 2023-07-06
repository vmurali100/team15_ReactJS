/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const Edit = () => {
  const [user, setUser] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const newUserDetails = { ...user };
    newUserDetails[e.target.name] = e.target.value;
    setUser(newUserDetails);
  };
  useEffect(() => {
    console.log(state.usr);
    setUser(state.usr);
  }, []);
  const handleUpdate = async () => {
    const response = await fetch("http://localhost:3000/student/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    navigate("/");
  };
  return (
    <div>
      <h2>Welcome to Edit User Component !!</h2>

      <UserForm
        userDetails={user}
        isEdit={isEdit}
        handleChange={handleChange}
        handleSubmit={handleUpdate}
      />
    </div>
  );
};

export default Edit;
