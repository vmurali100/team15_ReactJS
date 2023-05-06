import { Component } from "react";

export class Exmployee extends Component {
  constructor() {
    super();
    this.state = {
      empDetails: {
        fname: "Ram",
        lname: "Krishna",
        email: "ram@gmail.com",
        city: "Bangalore",
        state: "Karnataka",
        pin: 560066,
      },
      subjects:["HTML","CSS","JS","REACTJS"]
    };
  }

  render() {
    var { companyDetails } = this.props; // Destructering a property called companyDetails
    return (
      <div>
        <h2>Welcome To Employee Component !!</h2>
        <p>Company Name : {companyDetails}</p>

        {/* <ul>
          <li>{this.state.empDetails.fname}</li>
          <li>{this.state.empDetails.lname}</li>
          <li>{this.state.empDetails.email}</li>
          <li>{this.state.empDetails.city}</li>
          <li>{this.state.empDetails.state}</li>
          <li>{this.state.empDetails.pin}</li>
        </ul> */}

        <ul>
            {this.state.subjects.map((subject)=>{
                return <li>{subject}</li>
            })}
        </ul>

        <h2>Employee Details : </h2>
        <ul>
            {Object.values(this.state.empDetails).map((val)=>{
                return <li>{val}</li>
            })}
        </ul>
      </div>
    );
  }
}
