import React from "react";
import { JagaContextConsumer } from "./JagaContext";

export const JagaTable = () => {
  return (
    <div>
      <JagaContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>Email</td>
                    <td>Id</td>
                    <td>Password</td>
                    <td>Username</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.email}</td>
                      <td>{usr.id}</td>
                      <td>{usr.password}</td>
                      <td>{usr.username}</td>
                      <td>
                        <button
                          onClick={() => {
                            value.handeledit(usr, i);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            value.handeldelete(usr, i);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </JagaContextConsumer>
    </div>
  );
};
