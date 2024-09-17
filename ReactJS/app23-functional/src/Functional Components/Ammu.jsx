import React, { useState } from 'react'

export default function Ammu() {
    const[newstudent,setnewstudent]=useState("ganga")
  return (
    <div>
        <h2>My sister Name is:{newstudent}</h2>
        <button onClick={()=>{newstudent("Gangothri")}}>
    change
        </button>
    </div>
  )
}
