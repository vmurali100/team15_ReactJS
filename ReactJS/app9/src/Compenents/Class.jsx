import { useState } from "react"

export function Class(){
    const[myname,setname]=useState(5)

    // setTimeout(()=>{
    //     setname(myname+100)
    //   },2000)

      setInterval(()=>{
        setname(myname)
      },3000)
    return <div>
        <h1>value:{myname} </h1>
    </div>
}