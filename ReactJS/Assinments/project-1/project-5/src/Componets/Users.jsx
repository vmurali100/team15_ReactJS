/* eslint-disable eqeqeq */
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { UserContextProvider } from "./userContest";
import UsersTable from "./UsersTable";
import { useState } from "react";
import EditUser from "./EditUser";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: {
      firstname: "",
      lastname: "",
    },
    email: "",
    username: "",
    password: "",

    address: {
      city: "",
      number: "",
      street: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
  });

  const hanldeChange = (e) => {
    const newUser = { ...user };
    if (e.target.name == "firstname" || e.target.name == "lastname") {
      newUser.name[e.target.name] = e.target.value;
    }
    console.log(e.target.name.split("."));
    if (e.target.name.indexOf("address") > -1) {
      newUser.address[e.target.name.split(".")[1]] = e.target.value;
    } else if (e.target.name.indexOf("geolocation") > -1) {
      newUser.address["geolocation"][e.target.name.split(".")[1]] =
        e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setUser(newUser);
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((res) => {
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
      name: {
        firstname: "",
        lastname: "",
      },
      email: "",
      username: "",
      password: "",
      phone: "",
      address: {
        city: "",
        number: "",
        street: "",
        zipcode: "",
        geolocation: {
          lat: "",
          long: "",
        },
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
    // To Add the user

    setUsers(newUsers);
    clearUser();
    setIsEdit(false);
  };
  return (
    <div className="main">
      <UserContextProvider
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
      </UserContextProvider>
    </div>
  );
};

export default Users;
