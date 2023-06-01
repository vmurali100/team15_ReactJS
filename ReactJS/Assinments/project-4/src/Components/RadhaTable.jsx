import React from "react";
import { RadhaContextConsumer } from "./RadhaContext";

export const RadhaTable = () => {
  return (
    <div>
      <RadhaContextConsumer>
        {(value) => {
          return (
            <table border={1}>
              <thead>
                <tr>
                  <th>UserId</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {value.data.map((usr,i)=>(
                    <tr key={i}>
                        <td>{usr.userId}</td>
                        <td>{usr.id}</td>
                        <td>{usr.title}</td>
                        <td><button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button></td>
                        <td><button onClick={()=>{value.handleDelete(usr,i)}}>Delete</button></td>
                    </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </RadhaContextConsumer>
    </div>
  );
};
