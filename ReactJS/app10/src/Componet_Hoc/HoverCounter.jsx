/* eslint-disable react/no-direct-mutation-state */
import { Component } from "react";
import HOComponent from "./HoComponet";

 class HoverCounter2 extends Component {
 
  render() {
    return (
      <div>
        <button onMouseOver={this.props.handelincrement}>Increment +</button>
        <button onMouseOver={this.props.handeldecrement}>Decrement -</button>
        <h1>Count no : {this.props.count}</h1>
      </div>
    );
  }
}
export default HOComponent(HoverCounter2)