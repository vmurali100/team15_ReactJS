import { Component } from "react";

export class Raghu extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.message}</h2>
        <h2>Person From Parent Component </h2>
        <ul>
          <li>{this.props.person.fname}</li>
          <li>{this.props.person.lname}</li>
        </ul>

        <h2>Subjects from Parent Component</h2>
        <ul>
          {this.props.subjects.map((subject) => {
            return <li>{subject}</li>;
          })}
        </ul>
      </div>
    );
  }
}
