import React, { Component } from "react";
import HOCCount from "./HOCCount";

class JagaCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleincrement}>Increment +</button>
        <button onClick={this.props.handleDecrement}>Decrement -</button>
        <h1>Count value is:{this.props.count}</h1>
      </div>
    );
  }
}
export default HOCCount(JagaCounter);
