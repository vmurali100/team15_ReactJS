import React, { Component } from "react";
import HOComponent from "./HOComponent";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleIncrement}>Increment + </button>
        <button onClick={this.props.handleDecrement}>Decrement - </button>
        <h2>Count Value is : {this.props.count}</h2>
      </div>
    );
  }
}

export default HOComponent(ClickCounter);
