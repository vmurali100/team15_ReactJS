import React, { Component } from "react";
import axios from "axios";
import { SudhaData } from "./SudhaData";
import { SudhaContextProvider } from "./SudhaContext";
import { SudhaForm } from "./SudhaForm";

export default class Sudha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
        albumId: "",
        id: "",
        title: "",
        url: "",
        thumbnailUrl: "",
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
  Adduser = () => {
    var alluserscopy = [...this.state.user];
    alluserscopy.push({ ...this.state.users });
    this.setState({ user: alluserscopy });
    this.clearForm();
  };
  handleChange = (e) => {
    var newUser = { ...this.state.users };
    newUser[e.target.name] = e.target.value;
    this.setState({ users: newUser });
  };
  updateUser = () => {
    var alluserscopy = [...this.state.user];
    alluserscopy[this.state.gIndex] = this.state.users;
    this.setState({ user: alluserscopy, isEdit: false });
    this.clearForm();
  };
  clearForm = () => {
    var EmptyUser = {
      albumId: "",
      id: "",
      title: "",
      url: "",
      thumbnailUrl: "",
    };
    this.setState({ users: EmptyUser });
  };
  render() {
    return (
      <div>
        <SudhaContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            users: this.state.users,
            handleChange: this.handleChange,
            Adduser: this.Adduser,
            updateUser: this.updateUser,
            isEdit: this.state.isEdit,
          }}
        >
          <SudhaForm />
          <SudhaData />
        </SudhaContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      //   console.log(res.data);
      this.setState({ user: res.data });
    });
  }
}
