import React from "react";
import { CommentContextConsumer } from "./Commentcontext";

export const CommentTable = () => {
  return (
    <div>
      <CommentContextConsumer>
        {(value) => {
          return (
            <table border={1}>
              <thead>
                <tr>
                  <th>PostId</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {value.data.map((usr, i) => (
                  <tr key={i}>
                    <td>{usr.postId}</td>
                    <td>{usr.id}</td>
                    <td>{usr.name}</td>
                    <td>{usr.email}</td>
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
          );
        }}
      </CommentContextConsumer>
    </div>
  );
};