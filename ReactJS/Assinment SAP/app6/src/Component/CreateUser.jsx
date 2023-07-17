import React, { useState } from 'react'
import Userform from './Userform'
import { useNavigate } from 'react-router-dom'

 const CreateUser = () => {
  const navigate=useNavigate()
  const[userDetails,setuserDetails]=useState({
    name:"",
    phone:"",
    email:"",
    password:""
  })
  const handlechange=(e)=>{
    const newuser={...userDetails}
    newuser[e.target.name]=e.target.value
    setuserDetails(newuser)
    console.log(userDetails)
  }
  const handleSubmit=()=>{
    console.log(userDetails)
    fetch("http://localhost:3000/Rowdy",{
      method:"POST",
      body:JSON.stringify(userDetails),
      headers:{"Content-type": "application/json"}
    }).then(()=>{
      console.log("Added sucessfuly")
      navigate("/")
    })
  }
  return (
    <div>
        <h1>Hello iam From CreateUser</h1>
       <Userform userDetails={userDetails} handlechange={handlechange} handleSubmit={handleSubmit}/>
    </div>
  )
}
export default CreateUser