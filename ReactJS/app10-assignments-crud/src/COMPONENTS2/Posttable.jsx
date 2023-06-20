import React from "react";
import { PostContextConsumer } from "./Postcontext";

export const Posttable = () => {
  return (
    <div>
      <PostContextConsumer>
        {(value) => {
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>tittle</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.userId}</td>
                      <td>{usr.id}</td>
                      <td>{usr.title}</td>
                      <td>{usr.body}</td>
                      <td>
                        <button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button>
                      </td>
                      <td>
                        <button onClick={()=>{value.handleDelete(usr,i)}}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </PostContextConsumer>
    </div>
  );
};