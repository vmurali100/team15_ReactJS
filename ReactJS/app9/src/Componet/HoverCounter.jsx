/* eslint-disable no-undef */
import { Component } from "react";

export default class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handelDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { handelIncrement } = this;
    const { handelDecrement } = this;
    return (
      <div>
        <h1>Count No: {this.state.count}</h1>
        <button onMouseOver={handelIncrement}>Increment +</button>
        <button onMouseOver={handelDecrement}>Decrement -</button>
      </div>
    );
  }
}
