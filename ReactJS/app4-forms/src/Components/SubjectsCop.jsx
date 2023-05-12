import React, { Component } from "react";

export default class SubjectsCop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        subjects: [],
      },
    };
  }

  handleChange = (e) => {
    var newUser = { ...this.state.user };
    if (newUser.subjects.indexOf(e.target.value) == -1) {
      newUser.subjects.push(e.target.value);
    } else {
      newUser.subjects = newUser.subjects.filter((subj) => {
        return subj !== e.target.value;
      });
    }

    this.setState({ user: newUser });
  };

  addUser = () => {
    console.log(this.state.user);
  };
  clearUser = () => {
    console.log(this.state.user);
    var newUser = { ...this.state.user };
    newUser.subjects = [];
    this.setState({ user: newUser });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Subjects : </label> <br />
          <input
            type="checkbox"
            name="subject"
            value="HTML"
            checked={this.state.user.subjects.indexOf("HTML") > -1}
            onChange={this.handleChange}
          />{" "}
          HTML <br />
          <input
            type="checkbox"
            name="subject"
            value="CSS"
            checked={this.state.user.subjects.indexOf("CSS") > -1}
            onChange={this.handleChange}
          />{" "}
          CSS <br />
          <input
            type="checkbox"
            name="subject"
            value="JS"
            onChange={this.handleChange}
            checked={this.state.user.subjects.indexOf("JS") > -1}
          />{" "}
          JS <br />
          <input
            type="checkbox"
            name="subject"
            value="Angular"
            checked={this.state.user.subjects.indexOf("Angular") > -1}
            onChange={this.handleChange}
          />{" "}
          Angular <br />
          <input
            type="checkbox"
            name="subject"
            value="ReactJS"
            checked={this.state.user.subjects.indexOf("ReactJS") > -1}
            onChange={this.handleChange}
          />{" "}
          ReactJS <br />
        </form>
        <button onClick={this.addUser}>Add User</button> <br />
        <button onClick={this.clearUser}>Clear User</button>
      </div>
    );
  }
}
