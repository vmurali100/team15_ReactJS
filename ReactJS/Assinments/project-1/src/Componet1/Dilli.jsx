import React, { Component } from "react";
import axios from "axios";

import { DilliContextProvider } from "./DilliContext";
import { DilliForm } from "./EditForm";
import { DilliData } from "./DilliData";

export default class Dilli extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
        userId: "",
        id: "",
        title: "",
        body: "",
      },
      isEdit: false,
      gIndex: 0,
      user: [],
    };
  }
  handleEdit = (usr, i) => {
    this.setState({ users: usr, isEdit: true, gIndex: i });
  };
  handleDelete = (usr, i) => {
    var newUsers = this.state.user.filter((usr, index) => i !== index);
    this.setState({ user: newUsers });
  };
  handleChange = (e) => {
    var newUser = { ...this.state.users };
    newUser[e.target.name] = e.target.value;
    this.setState({ users: newUser });
  };
  Adduser = () => {
    var newUsers = [...this.state.user];
    newUsers.push({ ...this.state.users });
    this.setState({ user: newUsers });
    this.ClearForm();
  };
  ClearForm = () => {
    var EmptyUsers = {
      userId: "",
      id: "",
      title: "",
      body: "",
    };

    this.setState({ users: EmptyUsers });
  };
  Updateuser = () => {
    var newUsers = [...this.state.user];
    newUsers[this.state.gIndex] = this.state.users;
    this.setState({ user: newUsers, isEdit: false });
    this.ClearForm();
  };

  render() {
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
          
        </link>
        <DilliContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            users: this.state.users,
            handleChange: this.handleChange,
            Adduser: this.Adduser,
            Updateuser: this.Updateuser,
            isEdit: this.state.isEdit,
          }}
        >
          <DilliForm />
          <DilliData />
        </DilliContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ user: res.data });
    });
  }
}
