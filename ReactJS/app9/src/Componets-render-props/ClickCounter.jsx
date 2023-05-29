
import { Component } from "react";

export default class ClickCounter extends Component {
 

  render() {
    const { count,incrementCount, DecrementCount } = this.props;
   
    return (
      <div>
        <h1>Count No: {count}</h1>
        <button onClick={incrementCount}>Increment +</button>
        <button onClick={DecrementCount}>Decrement -</button>
      </div>
    );
  }
}
