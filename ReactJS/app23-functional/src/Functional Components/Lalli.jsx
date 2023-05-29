import React, { useState } from 'react'

export default function Lalli() {
    const[lname,setname]=useState("Viru")
  return (
    <div>
        <h2>Love name:{lname}</h2>
        <button onClick={()=>{setname("Viharika")}}>
    ChaneName:
        </button>
    </div>
  )
}
