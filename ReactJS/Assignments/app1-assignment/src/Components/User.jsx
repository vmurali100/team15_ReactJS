import React, { Component } from "react";
import axios from "axios";
import UsersData from "./UsersData";
import { UserContextProvider } from "./UserContext";
export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  handleEdit = (usr, i) => {
    console.log(usr);
  };
  handleDelete = (usr, i) => {
    var newUsers = this.state.users.filter((user, index) => i !== index);
    console.log(newUsers)
    this.setState({ users: newUsers });
  };
  handleUpdate = () => {};
  handleAdd = () => {};
  render() {
    return (
      <div>
        <UserContextProvider
          value={{
            data: this.state.users,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
          }}
        >
          <UsersData />
          
        </UserContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}
