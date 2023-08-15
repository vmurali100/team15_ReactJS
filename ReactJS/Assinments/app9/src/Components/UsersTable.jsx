import React from "react";
import { UserContextConsumere } from "./UsersContext";

export const UsersTable = () => {
  return (
    <div>
      <UserContextConsumere>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Phone</td>
                    <td>Username</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr) => (
                    <tr key={usr.id}>
                      <td>{usr.id}</td>
                      <td>{usr.email}</td>
                      <td>{usr.password}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.username}</td>
                      <td>
                        <button onClick={() => value.handelEdit(usr.id)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button onClick={() => value.handelDelete(usr.id)}>
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
      </UserContextConsumere>
    </div>
  );
};
