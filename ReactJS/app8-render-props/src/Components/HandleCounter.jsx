import React, { Component } from 'react'

export default class HandleCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrement=()=>{
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement=()=>{
        this.setState({ count: this.state.count - 1 });
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.handleIncrement,this.handleDecrement)}
      </div>
    )
  }
}
