import React, { Component } from "react";
import axios from "axios";
import { SaiContextProvider } from "./SaiContext";
import { SaiData } from "./SaiData";

export default class Sai extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  handleEdit = (usr,i) => {
    console.log(usr)
  };
  handleDelete = (usr,i) => {
    var newUsers=this.state.user.filter((usr,index)=>i !=index)
    this.setState({user:newUsers})

  };

  render() {
    return (
      <div>
        <SaiContextProvider
          value={{
            data: this.state.user,
            handleEdit: this.handleEdit,
            handleDelete: this.handleDelete,
          }}
        >
          <SaiData />
        </SaiContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res.data)
      this.setState({ user: res.data });
    });
  }
}
