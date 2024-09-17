import React, { Component } from "react";
import { VaniContextProvider } from "./VaniContext";
import axios from "axios";
import { VaniTable } from "./VaniTable";
import { VaniForm } from "./VaniForm";

export default class Vani extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
      isEdit: false,
      gIndex: 0,
      User: [],
    };
  }
  handleEdit = (usr, i) => {
    this.setState({ users: usr, isEdit: true, gIndex: i });
    console.log(usr);
  };
  handledelete = (usr, i) => {
    console.log(usr);
    var newUser = this.state.User.filter((usr, index) => i !== index);
    this.setState({ User: newUser });
  };
  hanldeChange = (e) => {
    var newUser = { ...this.state.users };
    if (e.target.name.indexOf("address") > -1) {
      newUser.address[e.target.name.split(".")[1]] = e.target.value;
    }
    if (e.target.name.indexOf("company") > -1) {
      newUser.company[e.target.name.split(".")[1]] = e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    this.setState({ users: newUser });
  };
  Adduser = () => {
    var newUser = [...this.state.User];
    newUser.push({ ...this.state.users });
    this.setState({ User: newUser });
    this.clearform();
  };
  Updatauser = () => {
    var newUser = [...this.state.User];
    newUser[this.state.gIndex] = this.state.users;
    this.setState({ User: newUser, isEdit: false });
    this.clearform();
  };
  clearform = () => {
    var emptyuser = {
      id: "",
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };
    this.setState({ users: emptyuser });
  };

  render() {
    return (
      <div>
        <VaniContextProvider
          value={{
            Data: this.state.User,
            handleEdit: this.handleEdit,
            handledelete: this.handledelete,
            users: this.state.users,
            hanldeChange: this.hanldeChange,
            Adduser: this.Adduser,
            Updatauser: this.Updatauser,
            isEdit: this.state.isEdit,
          }}
        >
            <VaniForm/>
            <VaniTable/>
        </VaniContextProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log(res.data);
      this.setState({User:res.data})
    });
  }
}
