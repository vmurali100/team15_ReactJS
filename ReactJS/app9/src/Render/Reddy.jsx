import { Component } from "react";
import { Child } from "./Child";
import { Pulicherla } from "./Pulicherla";

export default class Reddy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
saybye=()=>{
    return <h5>Hello iam return from parent</h5>
}
sayhi=()=>{
    return <Pulicherla/>
}
  render() {
    return (    
      <div>
        <h1>Hello welcome to Student</h1>
        <hr />
        <Child handlesaybye={this.saybye} displaypuli={this.sayhi}/>
      </div>
    );
  }
}
