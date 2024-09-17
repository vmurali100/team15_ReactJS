import React from "react";
import { UserContextConsumer } from "./ContextComp/UserContext";



const Jaga = () => {
  return (
    <div>
      <h2>are u love with me</h2>
   <UserContextConsumer>
   {(value)=>{
        return <h2 style={{color:"yellow"}}>
            We love Both each oher:{value}.same Culture
        </h2>

        
    }}
   </UserContextConsumer>
    </div>
  );
};
export default Jaga;
