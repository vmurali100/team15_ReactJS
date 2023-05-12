import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
      },
      isEdit: false,
      allUsers: [],
      gIndex: 0,
    };
  }

  handleChange = (e) => {
    // ... (tripple dot) called Spread Operator
    var propName = e.target.name;
    var newPerson = { ...this.state.user };
    newPerson[propName] = e.target.value;
    this.setState({ user: newPerson });
  };

  addUser = () => {
    var allUsersCopy = [...this.state.allUsers];
    allUsersCopy.push({ ...this.state.user });
    this.setState({ allUsers: allUsersCopy });
    this.clearForm();
  };

  clearForm = () => {
    var emptyUser = {
      fname: "",
      lname: "",
    };
    this.setState({ user: emptyUser });
  };

  handleDelete = (i) => {
    var deletedUsers = this.state.allUsers.filter((usr, index) => {
      return index !== i;
    });
    this.setState({ allUsers: deletedUsers });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  handleUpdate = () => {
    var allUsersCopy = [...this.state.allUsers];
    allUsersCopy[this.state.gIndex] = this.state.user;
    this.setState({ allUsers: allUsersCopy, isEdit: false });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            name="lname"
            value={this.state.user.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.isEdit ? (
            <button onClick={this.handleUpdate} type="button">
              Update User
            </button>
          ) : (
            <button type="button" onClick={this.addUser}>
              Add User
            </button>
          )}
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(i);
                      }}
                    >
                      Delete
                    </button>
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
