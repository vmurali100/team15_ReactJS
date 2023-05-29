import React from 'react'
import Chinna from './Chinna'
import { UserContextConsumer } from '../Context/UserContext'

 const Reddy = () => {
  return (
    <div>
        <h1>Reddy is thorth component</h1>
        <hr/>
        <UserContextConsumer>
            {(value)=>{
                return <h2 style={{color:"blue"}}>What's Your Problem:{value}...Called props drill down..!! </h2>

            }}
        </UserContextConsumer>
        <Chinna/>
    </div>
  )
}
export default Reddy