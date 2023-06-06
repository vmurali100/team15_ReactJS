import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { JagaContextProvider } from "./JagaContext";
import JagaTable from "./JagaTable";
import { JagaForm } from "./JagaForm";

const Jaga = () => {
  const [Users, setUsers] = useState([]);
  const [Index,setIndex]=useState(0)
  const [isEdit,SetisEdit]=useStat(false)
  const [user, setuser] = useState({
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
    const newUser = { ...user };
    if (e.target.name.indexof("address") > -1) {
      newUser.address[e.target.name.split(".")[1]] = e.target.value;
    }
    if (e.target.name.indexof("company") > -1) {
      newUser.company[e.target.name.split(".")[1]] = e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setuser(newUser);
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
  const handleEdit = (usr,i) => {
    setUsers(usr);
    setIndex(i)
    SetisEdit(true)
    // console.log(usr);
  };
  return (
    <div className="main">
      <JagaContextProvider
        value={{ Users, handleDelete, handleEdit, user, handlechange }}
      >
        <JagaTable />
        <JagaForm />
      </JagaContextProvider>
    </div>
  );
};
export default Jaga;
