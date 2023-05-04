import { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h2>Hello From Person Component !!</h2>
        <p>Hello From Paragraph</p>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
        <img
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default Person;
