import React, { Component } from "react";

export default class StudentsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var { users,handleEdit } = this.props;
    console.log(users)
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Subjects</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr,i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.subjects}</td>
                  <td>
                    <button onClick={()=>{handleEdit(usr,i)}}>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
