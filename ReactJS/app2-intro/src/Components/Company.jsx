import { Component } from "react";
import { Exmployee } from "./Employee";
import { Manager } from "./Manager";

export class Company extends Component {
  state = {
    companyName: "VMR InfoTech",
  };
  render() {
    return (
      <div>
        <h2>Welcome to Company Component !!</h2>
        <hr />
        {/* <Exmployee companyDetails = {this.state.companyName}/> */}
        <Manager/>
      </div>
    );
  }
}
