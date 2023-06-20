import React, { Component } from "react";
import Hoccomponent from "./Hoccomponent";

class Clickcounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.handleincrement}>Increment</button>
        <button onClick={this.props.handledecrement}>Decrement</button>
        <h2>count is:{this.props.count}</h2>
      </div>
    );
  }
}
export default Hoccomponent(Clickcounter);
