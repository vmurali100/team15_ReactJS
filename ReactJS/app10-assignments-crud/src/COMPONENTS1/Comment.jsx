import React, { Component } from "react";
import axios from "axios";
import { CommentContextProvider } from "./Commentcontext";
import { CommentData } from "./Commentdata";
import { CommentForm } from "./Commentform";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
        postId: "",
        id: "",
        name: "",
        email: "",
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
    var newUsers = this.state.user.filter((usr, index) => i != index);
    this.setState({ user: newUsers });
  };
  handlechange = (e) => {
    var newuser = { ...this.state.users };
    newuser[e.target.name] = e.target.value;
    this.setState({ users: newuser });
  };
  adduser = () => {
    var newusers = [...this.state.user];
    newusers.push({ ...this.state.users });
    this.setState({ user: newusers });
    this.clearForm();
  };
  clearForm = () => {
    var emptyUser = {
      postId: "",
      id: "",
      name: "",
      email: "",
      body: "",
    };
    this.setState({ users: emptyUser });
  };
  updateUser = () => {
    var newusers = [...this.state.user];
    newusers[this.state.gIndex] = this.state.users;
    this.setState({ user: newusers, isEdit: false });
    this.clearForm();
  };

  render() {
    return (
      <div>
        <CommentContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            users: this.state.users,
            handlechange: this.handlechange,
            adduser: this.adduser,
            updateUser: this.updateUser,
            isEdit: this.state.isEdit,
          }}
        >
          <CommentForm />
          <CommentData />
        </CommentContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res.data)
      this.setState({ user: res.data });
    });
  }
}