import React, { Component } from "react";
import axios from "axios";
import { UserContextProvider } from "./Usercontext";
import { Usersdata } from "./Usersdata";
import { Usersform } from "./Usersform";

export default class Users extends Component {
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
      gIndex: 0,
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.user };
    newuser[e.target.name] = e.target.value;
    this.setState({ user: newuser });
  };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  handleDelete = (usr, i) => {
    var newusers = this.state.users.filter((usr, index) => i != index);
    this.setState({ users: newusers });
  };
  handleUpdate = () => {
    var alluserscopy = [...this.state.users];
    alluserscopy[this.state.gIndex] = this.state.user;
    this.setState({ users: alluserscopy,isEdit:false });
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
        <UserContextProvider
          value={{
            data: this.state.users,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            handleChange: this.handleChange,
            handleAdd: this.handleAdd,
            handleUpdate: this.handleUpdate,
            user: this.state.user,
            isEdit: this.state.isEdit,
          }}
        >
          <Usersdata />
          <Usersform />
        </UserContextProvider>
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