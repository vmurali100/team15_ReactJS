import { useState } from "react";

export function SudhaAge() {
    const[stuentName,setStudentName] = useState("12");
    return (
        <div>
            <h1>my frined Age : {stuentName}</h1>
            <button
             onClick={()=>{
                setStudentName("32 !!");
             }}
            >
            Change Age
            </button>
        </div>
    );
}