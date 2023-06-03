/* eslint-disable eqeqeq */
import React from "react";
import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { DilliContextProvider } from "./UserContest";
import UsersTable from "./UsersTable";
import EditUser from "./EditUser";


const Dilli = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    password:"",
    
  });

  const hanldeChange = (e) => {
    const newUser = { ...user };
    setUser(newUser);
  };

  useEffect(() => {
    axios
      .get(
        "http://filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
      )
      .then((res) => {
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
      id: "",
      email: "",
      username: "",
      password: "",
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
      <DilliContextProvider
        value={{
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
     <EditUser/>
      </DilliContextProvider>
    </div>
  );
};

export default Dilli;
