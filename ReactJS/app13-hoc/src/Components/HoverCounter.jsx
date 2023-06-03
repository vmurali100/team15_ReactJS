import React, { Component } from "react";
import HOComponent from "./HOComponent";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.handleIncrement}>Increment + </button>
        <button onMouseOver={this.props.handleDecrement}>Decrement - </button>
        <h2>Count Value is : {this.props.count}</h2>
      </div>
    );
  }
}

export default HOComponent(HoverCounter);
