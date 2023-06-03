/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios, { Axios } from "axios";
import { DilliData } from "./DilliData";
import { DilliContextProvider } from "./DilliContext";

export default class Dilli extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  handeledit = (usr,i) => {
    console.log(usr)
  };
  handeldelete = (usr,i) => {
     var newusers = this.state.users.filter((usr, index) => i !== index);
     this.setState({ users: newusers });
       

  };
  handelupdate = () => {};
  handeladd = () => {};
  render() {
    return (
      <div>
        <DilliContextProvider
          value={{
            data: this.state.users,
            handeledit: this.handeledit,
            handeldelete: this.handeldelete,
          }}
        >
          <DilliData />
        </DilliContextProvider>
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
