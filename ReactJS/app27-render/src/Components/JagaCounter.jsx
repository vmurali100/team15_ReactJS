import React, { Component } from "react";

export default class JagaCounter extends Component {
  
  render() {
    const {count, increment,decrement } = this.props;

    return (
      <div>
        <h1>count is:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Dcrement</button>
      </div>
    );
  }
}
