import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

export default class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myName :"Murali",
         age:17

      }
      console.log("I am from Constructor !!")
    }

    static getDerivedStateFromProps(props,state){
        console.log("I am from getDerivedStateFromProps !!")
        return null
    }
    // 1. Mounting Phase 
    //     a. constructor 
    
  render() {
    console.log("I am from Render !!")
    return (
      <div>
        <LifeCycleChild myName={this.state.myName} age={this.state.age}/>
      </div>
    )
  }

  componentDidMount(){
    console.log("I am from Componentdidmount !!")
  }
}
