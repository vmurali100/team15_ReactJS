import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        gender: "",
        subjects: [],
      },
    };
  }

  handleChange = (e) => {
    var newUser = { ...this.state.user };
    if (e.target.name !== "subject") {
      newUser[e.target.name] = e.target.value;
    } else {
      if (newUser.subjects.indexOf(e.target.value) == -1) {
        newUser.subjects.push(e.target.value);
      } else {
        newUser.subjects = newUser.subjects.filter((subject) => {
          return subject !== e.target.value;
        });
      }
    }
    this.setState({ user: newUser });
  };

  addUser = () => {
    console.log(this.state.user);
    this.clearForm()
  };

  clearForm = () => {
    var newUser = {
      fname: "",
      lname: "",
      email: "",
      gender: "",
      subjects: [],
    };
    this.setState({ user: newUser });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.user.fname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="lname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.user.lname}

            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Gender:</label>
          <br />
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={this.state.user.gender == "male"}
            onChange={this.handleChange}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={this.state.user.gender == "female"}
            onChange={this.handleChange}
          />
          <label htmlFor="female">Female</label>
          <br />
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={this.handleChange}
          />
          <label htmlFor="other">Other</label>
          <br />
          <br />
          <label>Subjects:</label>
          <br />
          <input
            type="checkbox"
            id="math"
            name="subject"
            value="math"
            checked={this.state.user.subjects.indexOf("math") > -1}
            onChange={this.handleChange}
          />
          <label htmlFor="math">Math</label>
          <br />
          <input
            type="checkbox"
            id="science"
            name="subject"
            value="science"
            checked={this.state.user.subjects.indexOf("science") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="science">Science</label>
          <br />
          <input
            type="checkbox"
            id="history"
            name="subject"
            value="history"
            checked={this.state.user.subjects.indexOf("history") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="history">History</label>
          <br />
          <input
            type="checkbox"
            id="english"
            name="subject"
            value="english"
            checked={this.state.user.subjects.indexOf("english") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="english">English</label>
          <br />
          <br />
          <input type="button" value="Submit" onClick={this.addUser} />
        </form>
      </div>
    );
  }
}
