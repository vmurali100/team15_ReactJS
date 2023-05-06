import { Component } from "react";

export class InternalUsers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.myUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
