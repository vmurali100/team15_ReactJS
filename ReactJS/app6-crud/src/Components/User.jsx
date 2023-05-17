import React, { Component } from "react";
import axios from "axios";
export default class User extends Component {
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
      isEdit: false,
      users: [],
    };
  }
  handleChange = (e) => {
    console.log(e);
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
  updateUser = () => {};
  addUser = () => {
    axios.post("http://localhost:3201/users", this.state.user).then(() => {
      console.log("User Added Successfully");
      this.clearForm();
      this.getAllUsers();
    });
  };

  getAllUsers = () => {
    axios.get("http://localhost:3201/users").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };
  clearForm = () => {
    var newUser = {
      fname: "",
      lname: "",
      email: "",
      gender: "",
      subjects: [],
      isEdit: false,
      gIndex: 0,
    };
    this.setState({ user: newUser });
  };

  handleEdit = (usr) => {
    this.setState({ user: usr, isEdit: true });
  };

  updateUser = () => {
    axios
      .put("http://localhost:3201/users/" + this.state.user.id, this.state.user)
      .then((res) => {
        this.getAllUsers();
        this.clearForm();
      });
  };
  handleDelete=(usr)=>{
    axios.delete("http://localhost:3201/users/"+usr.id).then(()=>{
        this.getAllUsers()
    })
  }
  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    var { fname, lname, email, gender, subjects } = this.state.user;
    var { isEdit, users } = this.state;
    var { handleChange, updateUser, addUser, handleEdit,handleDelete } = this;
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
            {users.map((usr, i) => {
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
                    <button onClick={()=>{handleDelete(usr)}}>Delete</button>
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
