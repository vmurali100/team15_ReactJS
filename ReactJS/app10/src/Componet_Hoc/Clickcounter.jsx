/* eslint-disable react/no-direct-mutation-state */
import { Component } from "react";
import HOComponent from "./HoComponet";

 class ClickCounter2 extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.handelincrement}>Increment +</button>
        <button onClick={this.props.handeldecrement}>Decrement -</button>
        <h1>Count no : {this.props.count}</h1>
      </div>
    );
  }
}
export default HOComponent(ClickCounter2)
