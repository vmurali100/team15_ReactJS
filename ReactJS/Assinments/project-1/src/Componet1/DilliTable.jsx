import React from "react";
import { DilliContextConsumer } from "./DilliContext"


export const DilliTable = () =>{
    return (
        <div>
          <DilliContextConsumer/>  
            {(props) =>{
              console.log(props)
           
            }}
          <DilliContextConsumer/>
        </div>
    )
}