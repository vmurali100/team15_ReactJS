/* eslint-disable eqeqeq */
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import UsersTable from "./UsersTable";
import EditUser from "./EditUser";
import { PrinceContextProvider } from "./UserContest";



const Prince = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    userId:"",
    id:"",
    title:"",
    completed:"",
  });

  const hanldeChange = (e) => {
    const newUser = { ...user };
    setUser(newUser);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIndex(i);
    setIsEdit(true);
  };
  const handleDelete = (usr) => {
    const newUsers = users.filter((user) => user !== usr);
    setUsers(newUsers);
  };
  const clearUser = () => {
    setUser({
      userId:"",
      id:"",
      title:"",
      completed:"",
    });
  };

  const createUser = () => {
    const newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers);
    clearUser();
  };
  const handleUpdate = () => {
    const newUsers = [...users];
    newUsers[index] = user;
    setUsers(newUsers);
    clearUser();
    setIsEdit(false);
  };
  return (
    <div className="main">
      <PrinceContextProvider
       value=
        {{
          users,
          handleEdit,
          handleDelete,
          user,
          hanldeChange,
          handleUpdate,
          isEdit,
          createUser,
        }}
        >
        <UsersTable />
        <EditUser />

      </PrinceContextProvider>
    </div>
  );
};

export default Prince;
