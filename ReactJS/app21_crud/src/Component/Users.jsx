
import { Component } from "react";


export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        fname: "",
        mname: "",
        number: "",
        email: "",
        gender: "",
        dob: "",
        address: "",
        blood: "",
        department: "",
        courses: [],
      },
      isEdit: false,
      allusers: [],
      gIndex: 0,
    };
  }
  handlechange = (e) => {
    var newperson = { ...this.state.user };
    if (e.target.name !== "course") {
      newperson[e.target.name] = e.target.value;
    } else {
      if (newperson.courses.indexOf(e.target.value) == -1) {
        newperson.courses.push(e.target.value);
      } else {
        newperson.courses = newperson.courses.filter((course) => {
          return course !== e.target.value;
        });
      }
    }
    this.setState({ user: newperson });
    console.log(e.target.value);
  };
  adduser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy.push({ ...this.state.user });
    this.setState({ allusers: alluserscopy });
    this.clearForm();
  };
  clearForm = () => {
    var emptyuser = {
      name: "",
      fname: "",
      mname: "",
      number: "",
      email: "",
      gender: "",
      dob: "",
      address: "",
      blood: "",
      department: "",
      courses: [],
    };
    this.setState({ user: emptyuser });
  };
  handleDelete = (i) => {
    var deletedusers = this.state.allusers.filter((usr, index) => {
      return index != i;
    });
    this.setState({ allusers: deletedusers });
  };
  // handleSubjectchange = (e) => {
  //   var newperson = { ...this.state.user };
  //   newperson.courses.push(e.target.value);
  //   this.setState({ user: newperson });
  // };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  updateUser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy[this.state.gIndex] = this.state.user;
    this.setState({ allusers: alluserscopy, isEdit: false });
    this.clearForm();
  };

  render() {
    return (
      <div>
        <form>
          <h1>Student Registration Form</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="fname">Father Name:</label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="mname">Mother Name:</label>
          <input
            type="text"
            name="mname"
            value={this.state.user.mname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="number">Phone Namuber:</label>
          <input
            type="text"
            name="number"
            value={this.state.user.number}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.user.gender == "Male"}
            onChange={(e) => this.handlechange(e)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="famele"
            checked={this.state.user.gender == "famele"}
            onChange={(e) => this.handlechange(e)}
          />{" "}
          famele
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={this.state.user.gender == "Other"}
            onChange={(e) => this.handlechange(e)}
          />{" "}
          Other <br />
          <br />
          <label htmlFor="dob">Date of birth:</label>
          <input
            type="date"
            name="dob"
            value={this.state.user.dob}
            onChange={(e) => this.handlechange(e)}
          />{" "}
          (dd/mm/yyy) <br />
          <br />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={this.state.user.address}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <label htmlFor="blood">Blood Group:</label>
          <select
            name="blood"
            value={this.state.user.blood}
            onChange={(e) => this.handlechange(e)}
          >
            <option value="">select</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
          </select>
          <br />
          <br />
          <label htmlFor="department">Department:</label>
          <input
            type="radio"
            name="department"
            value="mech"
            checked={this.state.user.department == "mech"}
            onChange={(e) => this.handlechange(e)}
          />
          mech
          <input
            type="radio"
            name="department"
            value=" civil"
            checked={this.state.user.department == "civil"}
            onChange={(e) => this.handlechange(e)}
          />
          civil
          <input
            type="radio"
            name="department"
            value="It"
            checked={this.state.user.department == "It"}
            onChange={(e) => this.handlechange(e)}
          />
          It
          <br />
          <br />
          <label htmlFor="courses">Course:</label>
          <input
            type="checkbox"
            name="course"
            value="HTML"
            checked={this.state.user.courses.indexOf("HTML") > -1}
            onChange={(e) => this.handlechange(e)}
          />
          HTML
          <input
            type="checkbox"
            name="course"
            value="CSS"
            checked={this.state.user.courses.indexOf("CSS") > -1}
            onChange={(e) => this.handlechange(e)}
          />
          CSS
          <input
            type="checkbox"
            name="course"
            value=" JavaScript"
            checked={this.state.user.courses.indexOf("JavaScript") > -1}
            onChange={(e) => this.handlechange(e)}
          />
          JavaScript
          <input
            type="checkbox"
            name="course"
            value="ReactJs"
            checked={this.state.user.courses.indexOf("ReactJs") > -1}
            onChange={(e) => this.handlechange(e)}
          />
          ReactJs
          <br />
          <br />
          {this.state.isEdit ? (
            <button type="button" onClick={this.updateUser}>
              UpdateUser
            </button>
          ) : (
            <button type="button" onClick={this.adduser}>
              Adduser
            </button>
          )}
        </form>
        <br />
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>FatherName</th>
              <th>MotherName</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Blood Group</th>
              <th>Department</th>
              <th>Courses</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.fname}</td>
                  <td>{usr.mname}</td>
                  <td>{usr.number}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.dob}</td>
                  <td>{usr.address}</td>
                  <td>{usr.blood}</td>
                  <td>{usr.department}</td>
                  <td>{usr.courses}</td>
                  <td
                    onClick={() => {
                      this.handleEdit(usr, i);
                    }}
                  >
                    Edit
                  </td>
                  <td
                    onClick={() => {
                      this.handleDelete(i);
                    }}
                  >
                    Delete
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