import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { JagaContextProvider } from "./JagaContext";
import JagaTable from "./JagaTable";
import { JagaForm } from "./JagaForm";

export  const Jaga = () => {
  const [Users, setUsers] = useState([]);
  const [Index, setIndex] = useState(0);
  const [IsEdit, setIsEdit] = useState(false);
  const [User, setUser] = useState({
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
        lag: "",
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

const handlechange = (e) => {
  const newUser = { ...User };
  if (e.target.name.indexOf("address") > -1) {
    newUser.address[e.target.name.split(".")[1]] = e.target.value;
  } else if (e.target.name.indexOf("geo") > -1) {
    newUser.address["geo"][e.target.name.split(".")[1]] = e.target.value;
    if (e.target.name.indexOf("company") > -1) {
      newUser.company[e.target.name.split(".")[1]] = e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setUsers(newUser);
  }
  const ClearForm = () => {
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
          lag: "",
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
  const updateuser = () => {
    const newUser = [...Users];
    newUser[Index] = User;
    setUsers(newUser);
    ClearForm();
    setIsEdit(false);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  const handleDelete = (usr, i) => {
    const Deletedusers = Users.filter((usr, index) => i != index);
    setUsers(Deletedusers);
  };
  const handleEdit = (usr, i) => {
    setUsers(usr);
    setIndex(i);
    setIsEdit(true);
    // console.log(usr);
  };
  const Adduser = () => {
    const newUser = [...Users];
    newUser.push(User);
    setUsers(newUser);
    ClearForm();
  };
  return (
    <div className="main">
      <JagaContextProvider
        value={{
          Users,
          handleDelete,
          handleEdit,
          User,
          handlechange,
          updateuser,
          IsEdit,
          Adduser,
        }}
      >
        <JagaForm />
        <JagaTable />
      </JagaContextProvider>
    </div>
  );
};
};