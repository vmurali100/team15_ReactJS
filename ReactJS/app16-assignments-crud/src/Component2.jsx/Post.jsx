import React, { Component } from "react";
import axios from "axios";
import { PostContextProvider } from "./PostContext";
import PostData from "./PostData";



export default class Post extends Component {
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
         <PostContextProvider value={{data:this.state.users,handleEdit:this.handleEdit,handleDelete:this.handleDelete}}>
            <PostData/>
         </PostContextProvider>
         
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}