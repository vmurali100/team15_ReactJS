import React from "react";
import { VihaContextConsumer } from "./VihaContext";

export const ViharikaTAble = () => {
  return (
    <div>
      <VihaContextConsumer>
        {(value) => {
          return (
            <div>
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
                  {value.data.map((usr, i) => (
                    <tr key={i}>
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
                            value.handleDelete(usr, i);
                          }}
                        >
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
      </VihaContextConsumer>
    </div>
  );
};
