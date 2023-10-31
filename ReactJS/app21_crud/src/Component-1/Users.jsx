import React, { Component } from "react";
import axios from "axios";
import UsersTable from "./UsersTable";
export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        gender: "",
        contact: "",
        degree: "",
        engineering: "",
        hobbies: [],
        address: "",
        resume: "",
      },
      allUsers: [],
      isEdit: false,
    };
  }
  handlechange = (e) => {
    const propname = e.target.name;
    let newperson = { ...this.state.user };

    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        newperson[propname].push(e.target.value);
      } else {
        newperson[propname] = newperson[propname].filter(
          (val) => val !== e.target.value
        );
      }
    } else {
      newperson[propname] =
        e.target.type === "radio" ? e.target.value : e.target.value;
    }

    this.setState({ user: newperson });
  };
  handleEdit = (std) => {
    console.log(std);
    this.setState({ user: std, isEdit: true });
  };
  adduser = () => {
    axios
      .post("http://localhost:3001/Users", this.state.user)
      .then(() => {
        this.getDataFromserver();
      })
      .catch(() => {
        console.log("raising For the some errors");
      });
    this.clearForm();
  };
  handleupdata = () => {
    axios
      .put("http://localhost:3001/Users/" + this.state.user.id, this.state.user)
      .then(() => {
        this.getDataFromserver();
        this.clearForm();
      });
  };
  getDataFromserver = () => {
    axios.get("http://localhost:3001/Users").then((res) => {
      console.log(res.data);
      this.setState({ allUsers: res.data });
    });
  };
  getdata = () => {
    axios.get("http://localhost:3001/Users", this.state.user).then((res) => {
      this.setState({ allUsers: res.data });
    });
  };
  handleDelete = (usr) => {
    axios.delete("http://localhost:3001/Users/" + usr.id).then(() => {
      this.getDataFromserver();
    });
  };
  clearForm = () => {
    let newuser = {
      name: "",
      email: "",
      password: "",
      gender: "",
      contact: "",
      degree: "",
      engineering: "",
      hobbies: [],
      address: "",
      resume: "",
    };
    this.setState({ allUsers: newuser });
  };

  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.user.name}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={this.state.user.gender === "male"}
            onChange={this.handlechange}
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={this.state.user.gender === "female"}
            onChange={this.handlechange}
          />
          <label for="female">Female</label>
          <br />
          <br />

          <label for="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={this.state.user.textarea}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label for="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={this.state.user.degree}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label for="engineering">Engineering:</label>
          <input
            type="text"
            id="engineering"
            name="engineering"
            value={this.state.user.engineering}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />

          <label for="hobbies">Hobbies:</label>
          <input
            type="checkbox"
            id="playing_chess"
            name="hobbies"
            value="playing_chess"
            checked={this.state.user.hobbies.includes("playing_chess")}
            onChange={this.handlechange}
          />
          <label for="playing_chess">Playing Chess</label>
          <input
            type="checkbox"
            id="reading_books"
            name="hobbies"
            value="reading_books"
            checked={this.state.user.hobbies.includes("reading_books")}
            onChange={this.handlechange}
          />
          <label for="reading_books">Reading Books</label>
          <br />
          <br />

          <label for="address">Address:</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            value={this.state.user.address}
            onChange={this.handlechange}
            required
          ></textarea>
          <br />
          <br />

          <label for="resume">Attach Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            value={this.state.user.resume}
            onChange={this.handlechange}
            required
          />
          <br />
          <br />
          {this.state.isEdit ? (
            <button type="button" onClick={this.handleupdata}>
              Updata
            </button>
          ) : (
            <button type="button" onClick={this.adduser}>
              submit
            </button>
          )}
        </form>
        <br />
        <hr />
        <button onClick={this.getdata}>Get Data</button>
        <br />
        <br />
        <UsersTable
          Student={this.state.allUsers}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
