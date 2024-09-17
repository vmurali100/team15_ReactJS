import React from 'react'

export default function JagadeeshTable({users,handleedit,handledelete}) {
  return (
    <div>
              <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Qualification</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.age}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.qualification}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleedit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handledelete(usr);
                      }}
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
  )
}
