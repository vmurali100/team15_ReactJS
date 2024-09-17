import React, { useState } from 'react'

export default function Raja() {
    const[name,setname]=useState("Mouni")
  return (
    <div>
        <h2>love name is:{name}</h2>
        <button onClick={()=>{setname("Mounika")}}>change</button>
    </div>
  )
}
