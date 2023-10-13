import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
         <table border={2} >
      <thead>
        <tr>
          <th rowSpan={2}>A</th>
          <th>B</th>
         
          <th rowSpan={3}>D</th>
          <th colSpan={2}>E</th>
          <th>F</th>
        </tr>
        <tr>
        <th>C</th>
        <th rowSpan={2}>G</th>
         <th rowSpan={2}>H</th>
         <th rowSpan={2}>I</th>
        </tr>
  <tr>
      <th colSpan={2}>J</th>
     
  </tr>
  <tr>
      <th colSpan={3}>K</th>
      <th>L</th>
      <th colSpan={2}>M</th>
  </tr>
      </thead>
    </table>
      </div>
    )
  }
}
