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
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                   
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.userId}</td>
                      <td>{usr.id}</td>
                      <td>{usr.title}</td>
                      <td>{usr.body}</td>
                      <td>{usr.username}</td>
                      <td>
                        <button onClick={()=>{value.handleEdit(usr, i);}}>Edit</button>
                      </td>
                      <td>
                        <button onClick={()=>{value.handleDelete(usr, i);}}>Delete</button>
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
