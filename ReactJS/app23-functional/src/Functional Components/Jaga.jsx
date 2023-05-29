import React, { useState } from 'react'

export default function Jaga() {
    const[Username,setUsername]=useState("Gopi")
  return (
    <div>
        <h2>Username is :{Username}</h2>
        <button onClick={()=>{setUsername(" Gopi Slipa")}}>Change User Name:</button>

    </div>
  )
}
