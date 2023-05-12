import React, { Component } from "react";

export default class GenderComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        gender: "",
      },
    };
  }

  addUser = () => {
    console.log(this.state.user);
    this.clearUser()
  };
  handleChange = (e) => {
    var newUser = { ...this.state.user };
    newUser.gender = e.target.value;
    this.setState({ user: newUser });
  };
  clearUser = () => {
    var newUser = { ...this.state.user };
    newUser.gender = "";
    this.setState({ user: newUser });
  };

  render() {
    return (
      <div>
        <br />
        <form>
          <label htmlFor="">Gender : </label>
          Male
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.user.gender === "Male"}
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.user.gender === "Female"}
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
          <button type="button" onClick={this.addUser}>
            ADD User
          </button>{" "}
          <br />
          <button type="button" onClick={this.clearUser}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}
