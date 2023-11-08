import React from 'react'
import UsersDeatils from './UsersDeatils'

function User(props) {
  return (
    <div>
        <h1>Welome to Users section</h1>
        <hr />
        <UsersDeatils employee={props.employee}/>
    </div>
  )
}

export default User