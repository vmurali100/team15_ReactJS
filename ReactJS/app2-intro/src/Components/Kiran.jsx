import { Component } from "react";

export class Kiran extends Component {
  //props or Properties which comes from Parent
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hello From Kiran Component !!</h2>
        <p>Message From Parent : {this.props.wishes}</p>

        <h2>Person Details from Parent : </h2>

        <ul>
          <li>{this.props.personDetails.fname}</li>
          <li>{this.props.personDetails.lname}</li>
        </ul>

        <h2>Subhject Details From Parent :</h2>
        <ul>
          {this.props.subjectDetails.map((subject) => {
            return <li>{subject}</li>;
          })}
        </ul>
      </div>
    );
  }
}
