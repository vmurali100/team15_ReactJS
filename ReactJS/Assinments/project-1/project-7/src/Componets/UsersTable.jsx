import React from "react";
import { DilliContextConsumer } from "./UserContest";

const UsersTable = () => {
  
  return (
    <DilliContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          
          <tbody>
            {value.users.map((usr, i) => (
              
              <tr>
                <td>{usr.id}</td>
                <td>{usr.email}</td>
                <td>{usr.username}</td>
                <td>{usr.password}</td>
               
                <td>
                  <button
                    onClick={() => {
                      value.handleEdit(usr, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      value.handleDelete(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DilliContextConsumer>
  );
};

export default UsersTable;
