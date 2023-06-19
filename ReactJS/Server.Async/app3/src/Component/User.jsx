import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getUsersAsync } from '../UserSlice'
 const User = () => {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.users.users)
    useEffect(()=>{
        dispatch(getUsersAsync())
    },[dispatch])
  return (
    <div>
       <table border={1}>
<thead>
    <tr>
        <th>USERSID</th>
        <th>ID</th>
        <th>TITLE</th>
        <th>EDIT</th>
        <th>DELETE</th>
    </tr>
</thead>
<tbody>
    {users.map((usr,i)=>{
return(
    <tr key={i}>
        <td>{usr.usersId}</td>
        <td>{usr.id}</td>
        <td>{usr.title}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>
)
    })}
</tbody>
        </table> 
    </div>
  )
}
export default User