import axios from "axios";
import React , { useEffect, useState } from "react";
import Varshitable from "./Varshitable";

export default function Varshi() {
  const [allUsers, setUsers] = useState([]);
  useEffect(() => {
    getlatestusers();
  });
  const getlatestusers = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  };

  const handleEdit = () => {};
  const handledelete = (usr) => {
    axios.delete("http://localhost:3000/users/" + usr.id).then(() => {
      getlatestusers();
    });
  };
  return (
    <div>
      <Varshitable
        users={allUsers}
        handleEdit={handleEdit}
        handledelete={handledelete}
      />
    </div>
  );
}
