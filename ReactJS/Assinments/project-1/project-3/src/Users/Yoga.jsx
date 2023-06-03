
import React, { Component } from "react";
import axios from "axios";
import { YogaContextProvider } from "./YogaContext";
import { YogaData } from "./YogaData";

export default class Yoga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: {},
    };
  }
  render() {
    return <div>
        <YogaContextProvider value={this.state.Users}>
            <YogaData/>
        </YogaContextProvider>
    </div>;
  }
 componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
    //   console.log(res.data);
          this.setState({ users: res.data });
    });
 }
}
