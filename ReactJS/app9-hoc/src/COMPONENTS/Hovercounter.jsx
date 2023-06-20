import React, { Component } from 'react'
import Hoccomponent from './Hoccomponent'

class Hovercounter extends Component {
  render() {
    return (
      <div>
         <button onMouseOver={this.props.handleincrement}>Increment</button>
        <button onMouseOver={this.props.handledecrement}>Decrement</button>
        <h2>count is:{this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccomponent(Hovercounter)
