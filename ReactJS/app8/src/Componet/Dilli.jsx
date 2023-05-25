/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Dilli(){
    const [StudentName, setStudentName] = useState ("Dilli");
    return (
        <div>
            <h1> my name is : {StudentName}</h1>
            <button onClick={()=>{
                setStudentName("Dilli Babu !!");
            }}
            >
            Change Name

            </button>
        </div>
    );
}