import React, { Component } from "react";
import Websites from "./Websites";

export default class UsersDetails extends Component {
  constructor(props) {
    console.log("I am from Contructor !! - From Users Details Component ");
    super(props);

    this.state = {
        showWebsites:true
    };
  }
  // to Check the Props
  static getDerivedStateFromProps(props, state) {
    if (props.users.length == 10) {
      return {
        users: props.users.splice(5, 5),
      };
    }
    console.log(
      "I am from getDerivedStateFromProps !! - From Users Details Component"
    );

    return null;
  }
  // will  be called to render the Data
  render() {
    console.log("I am from render !! - From Users Details Component ");
    return (
      <div>
        <ul>
          {this.props.users.map((usr, i) => {
            return <li key={i}>{usr.email}</li>;
          })}
        </ul>
        <button onClick={()=>{this.setState({showWebsites:false})}}>Hide Websites</button>
        {this.state.showWebsites && <Websites info={this.props.users}/>}
      </div>
    );
  }

  // Will decide whethere component should update Or Not
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Called !!")
    return true;
  }
  // Will be called after Componet Update complete
  componentDidUpdate() {
    console.log("componentDidUpdate is called !!");
  }
}
