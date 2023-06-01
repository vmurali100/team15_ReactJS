import React, { Component } from "react";
import axios from "axios";
import { SudhaData } from "./SudhaData";
import { SudhaContextProvider } from "./SudhaContext";
export default class Sudha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  handleEdit = (usr, i) => {
    console.log(usr);
  };
  handleDelete = (usr, i) => {
    var newUsers = this.state.user.filter((usr, index) => i != index);
    this.setState({ user: newUsers });
  };
  render() {
    return (
      <div>
        <SudhaContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
          }}
        >
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
