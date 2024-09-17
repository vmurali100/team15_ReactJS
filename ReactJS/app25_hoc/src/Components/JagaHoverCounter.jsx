import React, { Component } from "react";
import HOCCount from "./HOCCount";

class JagaHoverCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.handleincrement}>Increment +</button>
        <button onMouseOver={this.props.handleDecrement}>Decrement -</button>
        <h1>Count value is:{this.props.count}</h1>
      </div>
    );
  }
}
export default HOCCount(JagaHoverCounter);
