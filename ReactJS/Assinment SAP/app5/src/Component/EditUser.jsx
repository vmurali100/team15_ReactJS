import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Userform from "./Userform";


const EditUser = () => {
  const [user, setuser] = useState({
    name: "",
    age: "",
    email: "",
  });
 const params =useParams()
 const navigate=useNavigate()
  const handlechange = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setuser(newuser);
  };
  useEffect(() => {
    fetch("http://localhost:3000/User/" + params.id)
      .then((responce) => responce.json())
      .then((data) => {
        setuser(data);
        console.log(data)
      });
  }, []);
const UpdateUser=()=>{
  fetch("http://localhost:3000/User/" + params.id,{
    method:"PUT",
    body:JSON.stringify(user),
    headers:{"Content-Type":"application/json"}
  }).then(()=>{
    navigate("/")
  })
}
  return (
    <div>
      <h1>Hello Iam From EditUser</h1>
     <Userform  handlechange={handlechange} user={user} btnText="Update user" handleSubmit={UpdateUser}/>
    </div>
  );
};
export default EditUser;
