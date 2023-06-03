/* eslint-disable no-unreachable */
import React from "react";
import { DilliContextConsumer } from "./DilliContext";

export const DilliTable = () => {
  return (
    <div>
      <DilliContextConsumer>
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
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.id}</td>
                      <td>{usr.email}</td>
                      <td>{usr.password}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.username}</td>
                      <td>
                        <button onClick={()=>{value.handeledit(usr,i)}}>Edit</button>
                      </td>
                      <td>
                        <button onClick={()=>{value.handeldelete(usr,i)}}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          
        }}
      </DilliContextConsumer>
    </div>
  );
};
