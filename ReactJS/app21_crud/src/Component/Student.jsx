import React, { Component } from "react";
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      users: {
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        study: "",
      },
      allUsers: [],
      isEdit:false,
      gIndex:0
    };
  }s

  adduser = () => {
   axios.post("http://localhost:3000/Users",this.state.users).then(()=>{
    console.log("added successfuly")
    this.getallusers()
   }).catch(()=>{
    console.log("some error raising in adduser")
      })
      this.ClearFrom()
  };
getallusers=()=>{
  axios.get("http://localhost:3000/Users").then((res)=>{
  console.log(res.data)
  this.setState({allUsers:res.data})
  }).catch((res)=>{
console.log("some error raising")
  })
}
handleEdit=(usr)=>{
  this.setState({users:usr,isEdit:true})
}
handleDelete=(usr)=>{
  axios.delete("http://localhost:3000/Users/"+usr.id).then(()=>{
    this.getallusers()
  })
}
ClearFrom=()=>{
 let newuser={
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    study: "",
  }
  this.setState({users:newuser})
}
handleUpdate=()=>{
  axios.put("http://localhost:3000/Users/"+ this.state.users.id ,this.state.users).then((res)=>{
    this.getallusers()
    this.ClearFrom()
   this.setState({isEdit:false})
  })
}
  hadlechange = (e) => {
    const propname = e.target.name;
    let newperson = { ...this.state.users };

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

    this.setState({ users: newperson });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.users.name}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.users.email}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.users.password}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.users.gender === "Male"}
            onChange={this.hadlechange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.users.gender === "Female"}
            onChange={this.hadlechange}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={this.state.users.gender === "Other"}
            onChange={this.hadlechange}
          />{" "}
          Other <br />
          <br />
          <label htmlFor="courses">Courses:</label>
          <input
            type="checkbox"
            name="courses"
            value="JavaScript"
            checked={this.state.users.courses.includes("JavaScript")}
            onChange={this.hadlechange}
          />
          JavaScript
          <input
            type="checkbox"
            name="courses"
            value="ReactJs"
            checked={this.state.users.courses.includes("ReactJs")}
            onChange={this.hadlechange}
          />{" "}
          ReactJs
          <input
            type="checkbox"
            name="courses"
            value="HTML"
            checked={this.state.users.courses.includes("HTML")}
            onChange={this.hadlechange}
          />
          HTML
          <input
            type="checkbox"
            name="courses"
            value="CSS"
            checked={this.state.users.courses.includes("CSS")}
            onChange={this.hadlechange}
          />{" "}
          CSS <br />
          <br />
          <label htmlFor="study">Study:</label>
          <select
            name="study"
            value={this.state.users.study}
            onChange={this.hadlechange}
          >
            <option value="">select..</option>
            <option value="Degree">Degree</option>
            <option value="B.Tech">B.Tech</option>
          </select>
          <br />
          <br />
         {this.state.isEdit ?  (<button type="button" onClick={this.handleUpdate}>
           UpDate Data
          </button>): (<button type="button" onClick={this.adduser}>
            Get Data
          </button>)}
        </form>
        <br /><br />
        <hr />
        <table border={3}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>GENDER</th>
              <th>COURSE</th>
              <th>STUDY</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr,i)=>{
              return <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.gender}</td>
                <td>{usr.courses}</td>
                <td>{usr.study}</td>
                <td><button onClick={()=>{this.handleEdit(usr,i)}}>Edit</button></td>
                <td><button onClick={()=>{this.handleDelete(usr,i)}}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
