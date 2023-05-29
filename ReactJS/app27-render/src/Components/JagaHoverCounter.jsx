import React, { Component } from "react";

export default class JagaHoverCounter extends Component {
  
  render() {
    const {count, increment,decrement  } = this.props;

    return (
      <div>
        <h1>count is:{count}</h1>
        <button onMouseOver={increment}>Increment</button>
        <button onMouseOver={decrement}>Dcrement</button>
      </div>
    );
  }
}
