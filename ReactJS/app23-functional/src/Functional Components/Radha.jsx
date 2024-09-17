import React, { useState } from 'react'

export default function Radha() {
    const[Playername,setPlayername]=useState("Yuvi")
  return (
    <div>
        <h1>Crikter PlayerName:{Playername}</h1>
        <button onClick={()=>{setPlayername("YuvarajSingh")}}>Change Name</button>
        

    </div>
  )
}
