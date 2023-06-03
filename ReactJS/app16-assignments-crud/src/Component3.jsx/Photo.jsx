import React, { Component } from "react";
import axios from "axios";
import { PhotoContextProvider } from "./PhotoContext";
import Photodata from "./Photodata";



export default class Photo extends Component {
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
         <PhotoContextProvider value={{data:this.state.users,handleEdit:this.handleEdit,handleDelete:this.handleDelete}}>
            <Photodata/>
         </PhotoContextProvider>
         
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/Photos").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}