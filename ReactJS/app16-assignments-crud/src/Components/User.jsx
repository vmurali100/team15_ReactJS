import React, { Component } from "react";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Usersdata from "./UsersData";



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
    console.log(newUsers);
    this.setState({ users: newUsers });
    
  };
  render() {
    return (
      <div>
         <UserContextProvider value={{data:this.state.users,handleEdit:this.handleEdit,handleDelete:this.handleDelete}}>
            <Usersdata/>
         </UserContextProvider>
         
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}