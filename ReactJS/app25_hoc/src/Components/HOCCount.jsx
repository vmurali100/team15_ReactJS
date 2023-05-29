import React, { Component } from "react";

const HOCCount = (OriginalComponent) => {
  class SampleComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleincrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            handleincrement={this.handleincrement}
            handleDecrement={this.handleDecrement}
          />
        </div>
      );
    }
  }
  return SampleComponent;
};
export default HOCCount;
