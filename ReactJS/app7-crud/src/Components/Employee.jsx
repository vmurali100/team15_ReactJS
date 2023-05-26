import { useEffect } from "react";
import { useState } from "react";

export function Employee() {
  const [myVariable, setVariable] = useState(0);
  const [abc,setAbc] = useState(10)

  // useEffect(()=>{
  //   console.log("Use Effect Triggered ,,,,,!!")
  // },[abc]) // Please Excute the Use Effect , whenever abc Value Changes ..

  setTimeout(()=>{
    setAbc(abc+100)
  },2000)

  return (
    <div>
      <button
        onClick={() => {
          setVariable(15);
        }}
      >
        Change Value
      </button>
      <h2>My Variable Value is : {myVariable}</h2>
      <h2>ABC Value is :{abc}</h2>
    </div>
  );
}
