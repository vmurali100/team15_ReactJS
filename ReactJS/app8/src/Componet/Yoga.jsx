/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Yoga (){
    const [StudentName,setStudentName]=useState("Yoga");
    return(
        <div>
            <h1>my friend name : {StudentName}</h1>
            <button
            onClick={()=> {
                setStudentName("Yoga is good boy !!")
            }}
            >
              Change Name
            </button>
        </div>
    )
}