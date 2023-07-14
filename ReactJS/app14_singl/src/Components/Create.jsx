/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const Create = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone:"",
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log("userDetails", userDetails);
    const response = await fetch("http://localhost:3000/student/", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var result = await response.json()
    navigate("/");
  };
  const handleChange = (e) => {
    const newUserDetails = { ...userDetails };
    newUserDetails[e.target.name] = e.target.value;
    setUserDetails(newUserDetails);
  };
  return (
    <div>
      <h2>Welcome to Create User Component !</h2>

      <UserForm
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        userDetails={userDetails}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Create;