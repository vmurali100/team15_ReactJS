import React from "react";
import { Component } from "react";

const HOComponent = (OriginalComponent) => {

  class SampleComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      );
    }
  }

  return SampleComponent;
};

export default HOComponent;