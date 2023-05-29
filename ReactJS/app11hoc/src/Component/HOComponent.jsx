import React, { Component } from "react";

const HOComponent = (Original) => {
  
  class Samplecomponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    hendleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    render() {
      return (
        <Original
          count={this.state.count}
          hendleIncrement={this.hendleIncrement}
          handleDecrement={this.handleDecrement}
        />
      );
    }
  }
  return Samplecomponent;
};
export default HOComponent;
