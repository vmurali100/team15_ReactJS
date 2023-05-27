import { useState } from "react"

export function Student(){
    const[myname,setname]=useState("What about you")
    return(
        <div>
            <h2>tell Me:{myname} </h2>
            <button onClick={()=>{}}>click</button>
        </div>
    )
}