import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAysnc } from '../UserSlice'

 const Table = () => {
    const dispatch=useDispatch()
   const users=useSelector((state)=>state.users.users)

   useEffect(()=>{
    dispatch(getUsersAysnc())
   },[dispatch])
    
  return (
    <div>
        <table border={1}>
<thead>
    <tr>
        <th>POSTID</th>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>BODY</th>
        <th>EDIT</th>
        <th>DELETE</th>
    </tr>
</thead>
<tbody>
    {users.map((usr,i)=>{
return(
    <tr key={i}>
        <td>{usr.postId}</td>
        <td>{usr.id}</td>
        <td>{usr.name}</td>
        <td>{usr.email}</td>
        <td>{usr.body}</td>
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
export default Table