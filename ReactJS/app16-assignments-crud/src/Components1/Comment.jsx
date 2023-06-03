import React, { Component } from "react";
import axios from "axios";
import { CommentContextProvider } from "./CommentContext";
import CommentData from "./CommentData";



export default class Comment extends Component {
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
         <CommentContextProvider value={{data:this.state.users,handleEdit:this.handleEdit,handleDelete:this.handleDelete}}>
            <CommentData/>
         </CommentContextProvider>
         
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}