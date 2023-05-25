import { div } from "prelude-ls";
import { useState } from "react";

export function Serial(){
  const[serialName,setSerialName]= useState("Mounaporatam")
  return <div>
    <h2>Serial Name is:{serialName}</h2>
    <button onClick={()=>{setSerialName("Mouna Geetham")}} >Change Name</button>
  </div>
}