import React, { Component } from "react";
import axios from "axios";
import { UserContextprovider } from "./UsersContext";
import { UsersData } from "./UsersData";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [], 
    };
  }
  handelEdit = (usr, i) => {
    console.log(usr);
  };
  handelDelete = (userId) => {
    const updatedUsers = this.state.Users.filter((user) => user.id !== userId);
    this.setState({ Users: updatedUsers });
  };

  handelUpdate = () => {};
  handelAdd = () => {};

  render() {
    return (
      <div>
        <UserContextprovider
          value={{
            data: this.state.Users,
            handelEdit: this.handelEdit,
            handelDelete: this.handelDelete,
          }}
        >
          <UsersData />
        </UserContextprovider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      console.log(res.data);
      this.setState({ Users: res.data });
    });
  }
}
