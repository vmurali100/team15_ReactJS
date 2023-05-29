/* eslint-disable no-undef */
import { Component } from "react";

export  class HoverCounter1 extends Component {
 
  render() {
    const { count, incrementCount, DecrementCount } = this.props;
    
    return (
      <div>
        <h1>Count No: {count}</h1>
        <button onMouseOver={incrementCount}>Increment +</button>
        <button onMouseOver={DecrementCount}>Decrement -</button>
      </div>
    );
  }
}
