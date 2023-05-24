import React, { Component } from "react";
import axios from "axios";

export default class Police extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        age: "",
        email: "",
        gender: "",
        qualification: [],
      },
      allusers: [],
      isedit: false,
      gIndex: 0,
    };
  }

  handlechange = (e) => {
    var newuser = { ...this.state.user };
    if (e.target.name != "qulfi") {
      newuser[e.target.name] = e.target.value;
    } else {
      if (newuser.qualification.indexOf(e.target.value) == -1) {
        newuser.qualification.push(e.target.value);
      } else {
        newuser.qualification = newuser.qualification.filter((qulfi) => {
          return qulfi != e.target.value;
        });
      }
    }
    this.setState({ user: newuser });
  };
  adduser = () => {
    axios.post("http://localhost:3000/jagu", this.state.user).then(() => {
      console.log("user added succeessfully");
      this.clearForm();
      this.getdatafromserver();
    });
  };
  clearForm = () => {
    var emptyuser = {
      name: "",
      age: "",
      email: "",
      gender: "",
      qualification: [],
    };
    this.setState({ user: emptyuser });
  };
  getdatafromserver = () => {
    axios.get("http://localhost:3000/jagu").then((res) => {
      console.log(res.data);
      this.setState({ allusers: res.data });
    });
  };
  handledelete = (usr) => {
    axios.delete("http://localhost:3000/jagu/" + usr.id).then(() => {
      this.getdatafromserver();
    });
  };
  componentDidMount() {
    this.getdatafromserver();
  }
  handleedit = (usr, i) => {
    this.setState({ user: usr, isedit: true });
  };
  updateuser = () => {
    axios
      .put("http://localhost:3000/jagu/" + this.state.user.id, this.state.user)
      .then((res) => {
        this.getdatafromserver();
        this.clearForm();
      });
  };

  render() {
    var { name, age, email, gender, qualification } = this.state.user;
    var { allusers, isedit } = this.state;
    var { handlechange, adduser, handledelete, handleedit, updateuser } = this;
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handlechange} />
          <br />
          <br />
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" value={age} onChange={handlechange} />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handlechange}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender == "male"}
            onChange={handlechange}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender == "female"}
            onChange={handlechange}
          />
          female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender == "other"}
            onChange={handlechange}
          />
          other <br />
          <br />
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="checkbox"
            name="qulfi"
            value="10"
            checked={qualification.indexOf("10") > -1}
            onChange={handlechange}
          />
          10
          <input
            type="checkbox"
            name="qulfi"
            value="inter"
            checked={qualification.indexOf("inter") > -1}
            onChange={handlechange}
          />
          inter
          <input
            type="checkbox"
            name="qulfi"
            value="graduation"
            checked={qualification.indexOf("graduation") > -1}
            onChange={handlechange}
          />
          graduation
          <input
            type="checkbox"
            name="qulfi"
            value="postgraduation"
            checked={qualification.indexOf("postgraduation") > -1}
            onChange={handlechange}
          />
          postgraduation <br />
          <br />
          {isedit ? (
            <button onClick={updateuser} type="button">
              Updateuser
            </button>
          ) : (
            <button onClick={adduser} type="button">
              {" "}
              Adduser
            </button>
          )}
        </form>
        <br />
        <br />
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Qualification</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.age}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.qualification}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleedit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handledelete(usr);
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
