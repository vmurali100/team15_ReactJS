import React, { Component } from "react";
import axios from "axios";
import { AlbumData } from "./Albumdata";
import { AlbumContextProvider } from "./Albumcontext";
import { AlbumForm } from "./Albumform";

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
        userId: "",
        id: "",
        title: "",
      },
      isEdit: false,
      gIndex: 0,
      user: [],
    };
  }
  handlechange = (e) => {
    var newUser = { ...this.state.users };
    newUser[e.target.name] = e.target.value;
    this.setState({ users: newUser });
  };
  adduser = () => {
    var Newusers = [...this.state.user];
    Newusers.push({ ...this.state.users });
    this.setState({ user: Newusers });
    this.clearForm();
  };
  handleEdit = (usr, i) => {
    this.setState({ users: usr, isEdit: true, gIndex: i });
  };
  handleDelete = (usr, i) => {
    var newUsers = this.state.user.filter((usr, index) => i != index);
    this.setState({ user: newUsers });
  };
  clearForm = () => {
    var Emptyuser = {
      userId: "",
      id: "",
      title: "",
    };
    this.setState({ users: Emptyuser });
  };
  updateuser = () => {
    var Newusers = [...this.state.user];
    Newusers[this.state.gIndex] = this.state.users;
    this.setState({ user: Newusers, isEdit: false });
    this.clearForm();
  };

  render() {
    return (
      <div>
        <AlbumContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            handlechange: this.handlechange,
            users: this.state.users,
            adduser: this.adduser,
            updateuser: this.updateuser,
            isEdit: this.state.isEdit,
          }}
        >
          <AlbumForm />
          <AlbumData />
        </AlbumContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      // console.log(res)
      this.setState({ user: res.data });
    });
  }
}