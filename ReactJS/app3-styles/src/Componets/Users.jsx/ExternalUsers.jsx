import { Component } from "react";

export class ExternalUsers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allusers.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
