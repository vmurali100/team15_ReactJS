import React, { Component } from "react";
import HOComponent from "./HOComponent"
class HoverCounter extends Component {
  render() {
    return <div>
      <h1>count is:{this.props.count} </h1>
      <button onMouseOver={this.props.hendleIncrement}>incrememnt +</button>
      <button onMouseOver={this.props.handleDecrement}>decrement -</button>
    </div>;
  }
}
export default HOComponent(HoverCounter);
