import { Component } from "react";
import allusers from "./allUsers.json";
import { ExternalUsers } from "./ExternalUsers";
import { InternalUsers } from "./InternalUsers";
export class UsersComp extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { fname: "Ram", lname: "Krishna" },
        { fname: "Kiran", lname: "Kumar" },
        { fname: "Sam", lname: "Sunder" },
      ],
    };
  }
  render() {
    console.log(allusers);
    return (
      <div>
        <InternalUsers myUsers={this.state.users} />
        <hr />
        <ExternalUsers allusers={allusers} />
      </div>
    );
  }
}
