import React, { Component } from "react";
import HOComponent from "./HOComponent"
class Student extends Component {
 
  render() {
   
    return <div>
        <h1>count is:{this.props.count}</h1>
        <button onClick={this.props. hendleIncrement}>increment +</button>
        <button onClick={this.props.handleDecrement}>decrement -</button>
    </div>;
  }
}
export default HOComponent(Student);
