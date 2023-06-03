import React, { Component } from "react";
import Ram from "./Ram";
import Suresh from "./Suresh";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  sayhello = () => {
    return <h3>Hello from Parent Component ...</h3>;
  };

  handleSuresh = () => {
    return <Suresh />;
  };
  render() {
    return (
      <div>
        <h2>Welcome to Student Component !!</h2>
        <hr />
        <Ram hanldeSayHello={this.sayhello} displaySuresh={this.handleSuresh} />
      </div>
    );
  }
}