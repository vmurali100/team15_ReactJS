import React, { Component } from "react";
import axios from "axios";
import CartData from "./CartData";
import { CartContextProvider } from "./Cartcontext";


export default class Cart extends Component {
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
         <CartContextProvider value={{data:this.state.users,handleEdit:this.handleEdit,handleDelete:this.handleDelete}}>
            <CartData/>
         </CartContextProvider>
         
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/carts").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
}