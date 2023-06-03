import React, { Component } from "react";

export default class ClickCounter extends Component {
 
  render() {
    const { count,incrementCount , decrementCount} = this.props;
    return (
      <div>
        <h2>Count Is : {count}</h2>
        <button onClick={incrementCount}>Increment + </button>
        <button onClick={decrementCount}>Decrement - </button>
      </div>
    );
  }
}