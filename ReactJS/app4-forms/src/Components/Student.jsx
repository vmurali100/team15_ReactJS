import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";

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
      users:[]
    };
  }

  handleChange = (e) => {
    console.log("handleChange CALLED")
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
    console.log(newUser)
    this.setState({ user: newUser });
  };

  addUser = () => {
    var newUsers = [...this.state.users]
    newUsers.push({...this.state.user})
    this.setState({users:newUsers})
    this.clearForm();
  };

  clearForm = () => {
    var newUser = {
      fname: "",
      lname: "",
      email: "",
      gender: "",
      subjects: [],
      isEdit:false,
      gIndex:0
    };
    this.setState({ user: newUser });
  };

  handleEdit=(usr,i)=>{
    this.setState({user:usr,isEdit:true,gIndex:i})
  }

  updateUser=()=>{
    var newUsers = [...this.state.users]
    newUsers[this.state.gIndex]=this.state.user;
    this.setState({users:newUsers,isEdit:false})
    this.clearForm()
    console.log("updateUser called !!")
  }
  render() {
    return (
      <div>
        <StudentForm {...this.state} handleChange={this.handleChange} addUser={this.addUser} updateUser={this.updateUser}/>
        <StudentsTable users={[...this.state.users]} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}
