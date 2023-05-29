import React from "react";
import { UserContextConsumer } from "./UserContext";

const UsersTable = () => {
  return (
    <div>
      <UserContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Phone</td>
                    <td>Username</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.id}</td>
                      <td>{usr.email}</td>
                      <td>{usr.password}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.username}</td>
                      <td>
                        <button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button>
                      </td>
                        <td>
                            <button onClick={()=>{value.handleDelete(usr,i)}}>
                                Delete
                            </button>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </UserContextConsumer>
    </div>
  );
};

export default UsersTable;
