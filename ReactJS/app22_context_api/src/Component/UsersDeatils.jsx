import React from 'react'
import MyContext from './Mycontext'
function UsersDeatils(props) {
  return (
    <div>
        <h1>Welome to UsersDeatils section</h1>
         <ul>{props.employee.map((usr,i)=>{
        return <li key={i}>{usr}</li>
       })}</ul>
       
       <MyContext.Consumer>
        {(user)=>{
            console.log(user)
         return <ul>{user.map((usr)=>{
           return <li>{usr.name}</li>
         })}</ul>
        }}
       </MyContext.Consumer>
    </div>
  )
}

export default UsersDeatils