import React, { useEffect, useState } from 'react'

 const Table = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        getAlluser()
    },[])
    const getAlluser = async ()=>{
       const respones=await  (await fetch("http://localhost:3000/Rowdy")).json()
       setUser(respones)
    }
  return (
    <div>
         <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {user.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.phone}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      Delete(usr);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}
export default Table