import React, { useState } from 'react'

export default function Sky() {
    const[Monthname,setMonth]=useState("Jan")
  return (
    <div>
<h2>Month name is:{Monthname}</h2>
<button onClick={()=>{setMonth("Octber")}}>
    change Month

</button>
    </div>
  )
}
