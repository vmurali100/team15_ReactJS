import { Component } from "react";
import { Kiran } from "./Kiran";
import { Raghu } from "./Raghu";

export class Ramu extends Component {
  state = {
    message: "Hello Ramu .. How Are you ",
    person: {
      fname: "Rama",
      lname: "Krishna",
    },
    subjects: ["HTML", "CSS", "JS", "ReactJS"],
  };
  // var message =
  // var ramuDetails = {
  //     fname:"Ramu",
  //     lname:"Krishna"
  // }
  // var subjects = ["HTML","CSS","JS"]

  render() {
    return (
      <div>
        <h2>Hello From Ramu Component !! </h2>
        <hr />
        {/* <Kiran
          wishes={this.state.message}
          personDetails={this.state.person}
          subjectDetails={this.state.subjects}
        /> */}

        <Raghu {...this.state}/>
        {/* <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul>
        <p>Subjetcs : </p>
        <ul>
          {this.state.subjects.map((subject) => {
            return <li>{subject}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
