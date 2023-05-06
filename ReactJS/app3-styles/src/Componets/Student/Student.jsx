import { Component } from "react";
import "./student.css";
import myCss from "./myStudent.module.css";
import myCssModule from './std.module.css'

export class Student extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(myCss);
    return (
      <div>
        <div style={{ background: "red", color: "white" }}>
          <h2>Welcome to Student Component !!</h2>
        </div>
        <div id="studentDiv">
          <h2>I am Inside studentDiv</h2>
        </div>

        <div className={myCss.studentBox}>
          <h2>Welcome to Module Styles !!</h2>
        </div>

        <div className={myCssModule.example}>
            <h2>I am Inside a Div of Module</h2>
        </div>
      </div>
    );
  }
}
