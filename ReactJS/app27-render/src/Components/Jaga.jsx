import React, { Component } from "react";
import Viharika from "./Viharika";
import { Mouni } from "./Mouni";

export default class Jaga extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  Sayhello = () => {
    return "Hello from viharika";
  };
  handleMouni=()=>{
    return <Mouni/>
  }
  render() {
    return (
      <div>
        <h2>Welocome to jaga</h2>
        <hr />
        <Viharika handlesayhello={this.Sayhello} displaymouni={this.handleMouni} />
      </div>
    );
  }
}
