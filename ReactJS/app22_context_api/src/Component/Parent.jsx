import React, { useState } from "react";
import Chaild from "./Chaild";
import MyContext from "./Mycontext";
function Parent() {
    const[employee,setemployee]=useState(["ravi","ram","rajesh"])
  const [user, setuser] = useState(
    [
      {
        id: 1,
        name: "John Smith",
        position: "Software Engineer",
        department: "Engineering",
        salary: 80000,
      },
      {
        id: 2,
        name: "Jane Doe",
        position: "Marketing Manager",
        department: "Marketing",
        salary: 75000,
      },
      {
        id: 3,
        name: "Michael Johnson",
        position: "Financial Analyst",
        department: "Finance",
        salary: 70000,
      },
      {
        id: 4,
        name: "Sarah Williams",
        position: "HR Specialist",
        department: "Human Resources",
        salary: 65000,
      },
      {
        id: 5,
        name: "David Lee",
        position: "Sales Representative",
        department: "Sales",
        salary: 60000,
      },
    ],
  );

  return (
    <div>
      <MyContext.Provider value={user}>
        <h1>Welome to Parent section</h1>
        <hr />
        <Chaild employee={employee}/>
      </MyContext.Provider>
    </div>
  );
}

export default Parent;
