import React, { useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Userform from "./Userform";
const CreateUser = () => {
  const [user, setuser] = useState({
    name: "",
    age: "",
    email: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setuser(newuser);
  };
  const handleAdduser = () => {
    console.log(user);
    fetch("http://localhost:3000/User", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
    }).then(() => {
        console.log("Added sucessfuly")
        clearform()
        navigate("/")
    });
  };
  const clearform=()=>{
    setuser({
        name: "",
        age: "",
        email: "", 
    })
  }
  return (
    <div>
      <h1>Iam From Create User</h1>
    <Userform handlechange={handlechange} handleSubmit={handleAdduser} user={user} btnText="Createuser" />
    </div>
  );
};
export default CreateUser;
