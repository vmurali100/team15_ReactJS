import React, { Component } from "react";

export default class HoverCounter extends Component {
  render() {
    const { count, incrementCount, decrementCount } = this.props;
    return (
      <div>
        <h2>Count Is : {count}</h2>
        <button onMouseOver={incrementCount}>Increment + </button>
        <button onMouseOver={decrementCount}>Decrement - </button>
      </div>
    );
  }
}
