/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
import { Component } from "react";

const HOComponent = (OriginalComponent) => {


  class Sampulcomponet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    handelincrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handeldecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handelincrement={this.handelincrement}
          handeldecrement={this.handeldecrement}
        />
      );
    }
  }
  return Sampulcomponet;
};
export default HOComponent;
