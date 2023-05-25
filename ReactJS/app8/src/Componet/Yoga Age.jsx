/* eslint-disable no-unused-vars */
import { useState } from "react";

export function YogaAge() {
    const[StudentName,setStudentName]=useState("18");
    return (
        <div>
            <h1>my friend Age : {StudentName}</h1>
            <button
            onClick={()=>{
                setStudentName("22 !!");
            }}
            >
            Change Age
            </button>
        </div>
    )
}