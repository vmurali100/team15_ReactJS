import React, { Component } from "react";
import UsersDetails from "./UsersDetails";

export default class LifeCycleChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      users: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    // if(props.myName == "Murali"){
    //     return {
    //         myName:"Murali Krishna"
    //     }
    // }
    if (props.age < 18) {
      return {
        message: "You Are a Teemager !!",
        age: props.age,
      };
    }
    return null;
  }
  getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({ users: data });
    });
  }
  render() {
    return (
      <div>
        <p> {this.state.age}</p>
        <p>{this.state.message}</p>
        <button onClick={this.getData}>Get Data </button>
        <hr />
       <UsersDetails users={this.state.users}/>
      </div>
    );
  }

  componentDidMount() {
   
  }
}
