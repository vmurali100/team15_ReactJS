import React from "react";


import { useState } from "react";

import Viharika from "./Viharika";
import { UserContextProvider } from "./ContextComp/UserContext";


const Aruna = () => {
  const [message, setMessage] = useState("I love U VIHARIKA");
  return (
    <div>
      <h2>We Miss U hbh baby</h2>
      <hr />
     <UserContextProvider value={message}>
     <Viharika/> 
     </UserContextProvider>
    
     
      
     
    </div>
  );
};
export default Aruna;
