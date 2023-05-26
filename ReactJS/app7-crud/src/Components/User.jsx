// import { Component } from "react";

import { useState } from "react";

// export class User extends Component{
//     constructor(props) {
//       super(props)

//       this.state = {

//       }
//     }

//     render(){
//         return <h2>Welcomet to User Component !!</h2>
//     }

// }

// Functional Components are called as Stateless Components
export function User() {
  const [userName, setUserName] = useState("Ravi");
  return (
    <div>
      <h2>User Name is : {userName}</h2>
      <button
        onClick={() => {
          setUserName("Ravi Kumar !!");
        }}
      >
        Set User
      </button>
    </div>
  );
}
