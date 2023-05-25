import React, { useState } from 'react'

export default function Gopi() {
    const[age,setage]=useState("23")
  return (
    <div>
<h2>Viaharika age:{age}</h2>
<button onClick={()=>{setage("18")}}>
    change Age:

</button>
    </div>
  )
}
