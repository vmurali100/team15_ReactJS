import React, { Component } from "react";
import axios from "axios";

export default class Person extends Component {
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
      allusers: [],
      isEdit: false,
      gIndex: 0,
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.user };
    if (e.target.name != "subject") {
      newuser[e.target.name] = e.target.value;
    } else {
      if (newuser.subjects.indexOf(e.target.value) == -1) {
        newuser.subjects.push(e.target.value);
      } else {
        newuser.subjects = newuser.subjects.filter((subject) => {
          return subject !== e.target.value;
        });
      }
    }
    this.setState({ user: newuser });
  };
  Adduser = () => {
    axios.post("http://localhost:3000/users", this.state.user).then(() => {
      console.log("user added successfully");
      this.clearForm();
      this.getdatafromserver();
    });
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
  getdatafromserver = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res.data);
      this.setState({ allusers: res.data });
    });
  };

  handleEdit = (usr) => {
    this.setState({ user: usr, isEdit: true });
  };
  updateUser = () => {
    axios
      .put("http://localhost:3000/users/" + this.state.user.id, this.state.user)
      .then((res) => {
        this.getdatafromserver();
        this.clearForm();
      });
  };
  handleDelete = (usr) => {
    axios.delete("http://localhost:3000/users/" + usr.id).then(() => {
      this.getdatafromserver();
    });
  };
  componentDidMount() {
    this.getdatafromserver();
  }

  render() {
    var { fname, lname, email, gender, subjects } = this.state.user;
    var { isEdit, allusers } = this.state;
    var { handleChange, Adduser, updateUser, handleDelete, handleEdit } = this;
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
            <input type="button" value="Updateuser" onClick={updateUser} />
          ) : (
            <input type="button" value="Adduser" onClick={Adduser} />
          )}
        </form>
        <hr />
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
            {allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.subjects}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(usr);
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
