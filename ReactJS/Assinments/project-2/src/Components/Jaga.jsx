import React, { Component } from "react";
import axios from "axios";
import { JagaData } from "./JagaData";
import { JagaContextProvider } from "./JagaContext";

export default class Jaga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  handleEdit = (usr, i) => {
    console.log(usr);
  };
  handleDelete = (usr,i) => {
    var newUsers=this.state.user.filter((usr,index)=>i !=index)
    this.setState({user:newUsers})
  };

  render() {
    return (
      <div>
        <JagaContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
          }}
        >
          <JagaData />
        </JagaContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ user: res.data });
    });
  }
}
