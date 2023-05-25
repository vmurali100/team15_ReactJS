/* eslint-disable no-unused-vars */
import { useState } from "react";

export function GunaAge(){
    const[stuentName,setStudentName]=useState("19");
    return (
        <div>
            <h1>my friend Age : {stuentName}</h1>
            <button
            onClick={()=>{
                setStudentName("21 !!")
            }}
            >
            Change Age
            </button>
        </div>
    )
}