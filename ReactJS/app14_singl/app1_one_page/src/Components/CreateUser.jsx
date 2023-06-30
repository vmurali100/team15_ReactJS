import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handlechange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const adduser = () => {
    console.log(user);
    fetch("http://localhost:3000/student", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      clearform();
      navigate("/");
    });
  };
  const clearform = () => {
    setuser({
      name: "",
      age: "",
      email: "",
    });
  };

  return (
    <div>
      <h2>Welcome to CreateUser</h2>
      <AddUser
        handlechange={handlechange}
        HandleSumbit={adduser}
        user={user}
        btnText="Create User"
      />
    </div>
  );
};
export default CreateUser;
