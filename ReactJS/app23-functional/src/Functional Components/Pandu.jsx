import React, { useState } from 'react'

export default function Pandu() {
    const[studing,setstuding]=useState("10")
  return (
    <div>
        <h1>sister Studing:{studing}</h1>
        <button onClick={()=>{setstuding("Inter")}}>
    change Studing
        </button>
    </div>
  )
}
