


import React, { Component } from "react";
import axios from "axios";
import { VihaContextProvider } from "./VihaContext";
import { ViharikaData } from "./ViharikaData";
import { ViharikaForm } from "./ViharikaForm";

export default class Viharika extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: "",
        email: "",
        username: "",
        password: "",
      },
      users: [],
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.user };
    newuser[e.target.name] = e.target.value;
    this.setState({ user: newuser });
  };
  handleEdit = (usr, i) => {
    console.log(usr);
  };
  handleDelete = (usr, i) => {
    var newusers = this.state.users.filter((usr, index) => i !== index);
    this.setState({ users: newusers });
  };
  handleUpdate = () => {};
  handleAdd = () => {};

  render() {
    return (
      <div>
        <VihaContextProvider
          value={{
            data: this.state.users,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
          }}
        >
          <ViharikaData />
          <ViharikaForm />
        </VihaContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/carts").then((res) => {
      // console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}
