import React, { Component } from 'react'

export default class Hoverconter extends Component {
   
      render() {
        const {count, incrementcount, decrementcount } = this.props;
        return (
          <div>
            <h2>count is :{count}</h2>
            <button onMouseOver={incrementcount}>increment + </button> 
            <button onMouseOver={decrementcount}>decrement - </button>
    
            
          </div>
        );
      }
}
