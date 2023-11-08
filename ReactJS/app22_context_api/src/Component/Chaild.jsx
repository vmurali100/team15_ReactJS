import React from 'react'
import User from './User'

function Chaild(props) {
  return (
    <div>
        <h1>Welome to Chaild section</h1>
        <hr />
        <User employee={props.employee}/>
    </div>
  )
}

export default Chaild