/* eslint-disable eqeqeq */
import React from "react";
import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { DilliContextProvider } from "./userContest";
import UsersTable from "./UsersTable";
import EditUser from "./EditUser";

const Dilli = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false); 
  const [user, setUser] = useState({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const hanldeChange = (e) => {
    const newUser = { ...user };

    if (e.target.name.indexOf("address") > -1) {
      newUser.address[e.target.name.split(".")[1]] = e.target.value;
    }
    if (e.target.name.indexOf("company") > -1) {
      newUser.company[e.target.name.split(".")[1]] = e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setUser(newUser);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
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
      id: 1,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
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
        <EditUser />
      </DilliContextProvider>
    </div>
  );
};

export default Dilli;
