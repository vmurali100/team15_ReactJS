import React, { useState } from "react";
import Guna from "./Guna";
import { UserContextProvider } from "../Context/UserContext";

export  const Pulicherla = () => {
    const[message,setMessage]=useState("Do You NO Who IAm")
  return (
    <div>
      <h1> Pulicherla is main component</h1>

      <hr/>
      <UserContextProvider value={message} >
      <Guna/>
      </UserContextProvider>
     
    </div>
  );
};
