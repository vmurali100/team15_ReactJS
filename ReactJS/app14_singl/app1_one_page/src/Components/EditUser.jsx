/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setuser] = useState({
    name: "",
    age: "",
    email: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const handlechange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  useEffect(() => {
    fetch("http://localhost:3000/student/" + params.id)
      .then((responce) => responce.json())
      .then((data) => {
        setuser(data);
      });
  }, []);
  const UpdateUser = () => {
    fetch("http://localhost:3000/student/" + params.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Welcome to Edit User</h2>
      <AddUser
        handlechange={handlechange}
        user={user}
        btnText="Update User"
        HandleSumbit={UpdateUser}
      />
    </div>
  );
};
export default EditUser;
