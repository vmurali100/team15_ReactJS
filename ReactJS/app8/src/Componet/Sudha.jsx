import { useState } from "react";

export function Sudha(){
    const[StudentName,setStudentName]=useState("Sudha");
    return(
        <div>
            <h1>
                My friend Name :{StudentName}
            </h1>
            <button
            onClick={()=>{
                setStudentName("Sudha Reddy !!");
            }}
            >
            Change Name
            </button>
        </div>
    )
}