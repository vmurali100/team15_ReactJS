import { useState } from "react"

export function Reddy(){
    const[Reddyname,setreddy]=useState("Reddy")
    return(
        <div>
            <h1>Full Name:
                {Reddyname}</h1>
            <button onClick={()=>{setreddy("Pulicherla Guna Reddy")}}>Name</button>
        </div>
    )
}