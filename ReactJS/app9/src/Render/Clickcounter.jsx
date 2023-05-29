import React, { Component } from "react";

export default class Clickcounter extends Component {
  render() {
    const { count, incrementcount, decrementcount } = this.props;
    return (
      <div>
        <h2>count is :{count}</h2>
        <button onClick={incrementcount}>increment + </button>
        <button onClick={decrementcount}>decrement - </button>
      </div>
    );
  }
}
