import { useState } from "react"

export function Sky(){
    const[name,setname]=useState("who are you")
    return(
        <div>
            <h1>Hello:{name} </h1>
            <button onClick={()=>{setname("IAm devil in my Wrods")}}>Tellme</button>
        </div>
    )
}