import React, { Component } from "react";
import axios from "axios";
import { JagaTable } from "./JagaTable";
import { JagaContextProvider } from "./JagaContext";
import { JagaForm } from "./JagaForm";

export default class Jaga extends Component {
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
    var newUsers = { ...this.state.users };
    newUsers[e.target.name] = e.target.value;
    this.setState({ users: newUsers });
  };
  handleEdit = (usr, i) => {
    this.setState({ users: usr, isEdit: true, gIndex: i });
  };
  handleDelete = (usr, i) => {
    var newUsers = this.state.user.filter((usr, index) => i != index);
    this.setState({ user: newUsers });
  };
  adduser = () => {
    var newUsers = [...this.state.user];
    newUsers.push({ ...this.state.users });
    this.setState({ user: newUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newusers = {
      userId: "",
      id: "",
      title: "",
    };
    this.setState({ users: newusers });
  };
  updateuser = () => {
    var newUsers = [...this.state.user];
    newUsers[this.state.gIndex] = this.state.users;
    this.setState({ user: newUsers, isEdit: true });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <JagaContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
            updateuser: this.updateuser,
            adduser: this.adduser,
            isEdit: this.state.isEdit,
            handlechange: this.handlechange,
            users: this.state.users,
          }}
        >
          <JagaForm />
          <JagaTable />
        </JagaContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }
}
