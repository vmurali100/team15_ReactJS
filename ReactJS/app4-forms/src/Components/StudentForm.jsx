import React, { Component } from "react";

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    var { fname, lname, email, gender, subjects } = this.props.user;
    var { handleChange, addUser, updateUser, isEdit } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
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
            checked={gender == "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender == "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <br />
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender == "other"}
            onChange={handleChange}
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
            checked={subjects.indexOf("math") > -1}
            onChange={handleChange}
          />
          <label htmlFor="math">Math</label>
          <br />
          <input
            type="checkbox"
            id="science"
            name="subject"
            value="science"
            checked={subjects.indexOf("science") > -1}
            onChange={handleChange}
          />
          <label htmlFor="science">Science</label>
          <br />
          <input
            type="checkbox"
            id="history"
            name="subject"
            value="history"
            checked={subjects.indexOf("history") > -1}
            onChange={handleChange}
          />
          <label htmlFor="history">History</label>
          <br />
          <input
            type="checkbox"
            id="english"
            name="subject"
            value="english"
            checked={subjects.indexOf("english") > -1}
            onChange={handleChange}
          />
          <label htmlFor="english">English</label>
          <br />
          <br />
          {isEdit ? (
            <input type="button" value="Update" onClick={updateUser} />
          ) : (
            <input type="button" value="Submit" onClick={addUser} />
          )}
        </form>
      </div>
    );
  }
}
