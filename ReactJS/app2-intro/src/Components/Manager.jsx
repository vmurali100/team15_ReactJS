import { Component } from "react";

export class Manager extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      managerDetails: {
        name: "Ramesh",
        department: "IT",
        experience: 15,
        salary: 300000,
        city: "Bangalore",
      },
    };
  }
  sayhelloToManager = () => {
    console.log("Hello Manager How Are you !!");
  };
  showEmpDetails = () => {
    let newState = { ...this.state }; // Copy the Previos state
    newState.showDetails = true; // Change the value for showDetails
    this.setState(newState); // Updating the State .
  };
  render() {
    return (
      <div>
        <h2>Welcome to Mananger Component !!</h2>
        <button onClick={this.sayhelloToManager}>Say Hello</button> <br />
        <br />
        <button onClick={this.showEmpDetails}>Show Employee Details</button>
        {this.state.showDetails && (
          <div>
            <ul>
              {Object.values(this.state.managerDetails).map((val, i) => {
                return <li key={i}>{val}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
