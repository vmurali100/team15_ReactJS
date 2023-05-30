import { Component } from "react";
import axios from "axios";
import { DilliContextProvider } from "./DilliContext";
import { DilliData } from "./DilliData";

export default class Dilli extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: "",
        email: "",
        username: "",
        password: "",
      },
      users: [],
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.user };
    newuser[e.target.name] = e.target.value;
    this.setState({ user: newuser });
  };
  handleEdit = (usr, i) => {
    console.log(usr);
  };
  handleDelete = (usr, i) => {
    var newusers = this.state.users.filter((usr, index) => i !== index);
    this.setState({ users: newusers });
  };
  handleUpdate = () => {};
  handleAdd = () => {};

  render() {
    return (
      <div>
        <DilliContextProvider
          value={{
            data: this.state.users,
            handleEdit:this.handleEdit,
           handleDelete:this.handleDelete,
          }}
        />
            <DilliData/>
            
        <DilliContextProvider />
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      this.setState({ users: res.data });
      console.log(res)
    });
  }
}