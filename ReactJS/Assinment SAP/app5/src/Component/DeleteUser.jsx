import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

 const DeleteUser = () => {
  const navigate=useNavigate()
  const[user,setUser]=useState({})
  const params=useParams()
  console.log(params)
  useEffect(()=>{
    fetch("http://localhost:3000/User/"+params.id).then((response)=>response.json()).then((data)=>{
      console.log(data)
      setUser(data)
    })
  },[])
  const confirmdelete=()=>{
    fetch("http://localhost:3000/User/"+params.id,{
      method:"DELETE"
    }
    ).then(()=>{
      navigate("/")
    })
  }
  return (
    <div>
       <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
       </ul>
       <button className='btn btn-danger' onClick={confirmdelete}>confirm Delete</button>
    </div>
  )
}
export default DeleteUser