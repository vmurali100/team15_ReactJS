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
      isEdit: false,
      gindex: 0,
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.user };
    newuser[e.target.name] = e.target.value;
    this.setState({ user: newuser });
  };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true ,gindex:i});
  };
  handleDelete = (usr, i) => {
    var newusers = this.state.users.filter((usr, index) => i != index);
    this.setState({ users: newusers });
  };
  handleUpdate = () => {
    var alluserscopy = [...this.state.users];
    alluserscopy[this.state.gindex] = this.state.user;
    this.setState({ users: alluserscopy });
    this.clearForm();
  };
  handleAdd = () => {
    var alluserscopy = [...this.state.users];
    alluserscopy.push({ ...this.state.user });
    this.setState({ users: alluserscopy });
    this.clearForm();



  };

  clearForm = () => {
    var emptyUser = {
      id: "",
      email: "",
      username: "",
      password: "",
    };
    this.setState({ user: emptyUser });
  };

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
          <ViharikaForm
           
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
            handleUpdate={this.handleUpdate}

          />
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
