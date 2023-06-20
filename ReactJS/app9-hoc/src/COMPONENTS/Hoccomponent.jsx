import React from "react";
import { Component } from "react";
import Clickcounter from "./Clickcounter";

const Hoccomponent = (Originalcomponent) => {
  class Sample extends  Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleincrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handledecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    render() {
      return (
        <div>
          <Originalcomponent
            count={this.state.count}
            handleincrement={this.handleincrement}
            handledecrement={this.handledecrement}
          />
        </div>
      );
    }
  }
  return Sample;
};

export default Hoccomponent;
