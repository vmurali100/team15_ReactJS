/* eslint-disable eqeqeq */
import React, { Component } from "react";
import axios from "axios";
import { VihaContextProvider } from "./VihaContext";
import { ViharikaData } from "./ViharikaData";
import { ViharikaForm } from "./ViharikaForm";

 class V extends Component {
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
    var newusers = this.state.users.filter((usr, index) => i != index);
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
    axios
      .get(
        "http://filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ users: res.data });
      });
  }
}
export default V
