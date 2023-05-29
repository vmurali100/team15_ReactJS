/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { StudentsTable } from "./StudentTable";

export function Student() {
  const [stuentName, setStudentName] = useState("dilli");
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getLatestUsers();
  }, []);

  const getLatestUsers = () => {
    axios.get("http://localhost:30001/users").then((res) => {
      setAllUsers(res.data);
    });
  };

  const handleEdit = () => {};

  const handleDelete = (usr) => {
    console.log(usr);
    axios.delete("http://localhost:30001/users" + usr.id).then(() => {
      getLatestUsers();
    });
  };
  return (
    <div>
      

      <StudentsTable
        users={allUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
