import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { StudentsTable } from "./StudentsTable";
export function Student() {
  const [stuentName, setStudentName] = useState("Ram");
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getLatestUsers()
  }, []);

  const getLatestUsers=()=>{
    axios.get("http://localhost:3001/users").then((res) => {
      setAllUsers(res.data);
    });
  }

  const handleEdit = () => {};

  const handleDelete = (usr) => {
    console.log(usr);
    axios.delete("http://localhost:3001/users/"+usr.id).then(()=>{
      getLatestUsers()
    })
  };
  return (
    <div>
      {/* <h2>Student Name is : {stuentName}</h2>
      <button
        onClick={() => {
          setStudentName("Rama Krishna !!");
        }}
      >
        Change Name
      </button> */}

      <StudentsTable
        users={allUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
