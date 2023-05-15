import React, { Component } from 'react'

export default class Websites extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.info.map((usr)=>{
            return <li>{usr.website}</li>
        })}
        </ul>
      </div>
    )
  }
  componentWillUnmount(){
    alert("Component is Removed Now !!!")
  }
}
