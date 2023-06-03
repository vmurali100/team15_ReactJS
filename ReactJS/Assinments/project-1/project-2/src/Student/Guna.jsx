import React, { Component } from 'react'
import axios from 'axios'
import { GunaContextProvider } from './GunaContext'
import { GunaData } from './GunaData'

export default class Guna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  handeledit = (usr, i) => {
    console.log(usr);
  };
  handeldelete = (usr, i) => {
    var newusers = this.state.users.filter((usr, index) => i !== index);
    this.setState({ users: newusers });
  };
  render() {
    return (
      <div>
        <GunaContextProvider
          value={{
            data: this.state.users,
            handeledit: this.handeledit,
            handeldelete: this.handeldelete,
          }}
        >
          <GunaData />
        </GunaContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //    console.log(res.data)
      this.setState({ users: res.data });
    });
  }
}
