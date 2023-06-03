import React from "react";
import { PrinceContextConsumer } from "./UserContest";



const UsersTable = () => {
  return (
    <PrinceContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>title</th>
              <th>completed</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {value.users.map((usr, i) => (
              <tr>
                <td>{usr.userId}</td>
                <td>{usr.id}</td>
                <td>{usr.title}</td>
                <td>{usr.completed}</td>

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
    </PrinceContextConsumer>
  );
};

export default UsersTable;
