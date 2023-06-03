import React from "react";
import { CommentContextConsumer } from "./CommentContext";


const CommentTable = () => {
  
  return (
    <div>
      <CommentContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>postId</td>
                    <td>id</td>
                    <td>name</td>
                    
                    <td>email</td>
                    <td>body</td>
                    
                    <td>Edit</td>
                    <td>Delete</td>
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
                        <button
                          onClick={() => {
                            value.handleEdit(usr, i);
                          }}
                        >
                          EDIT
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
      </CommentContextConsumer>
    </div>
  );
};
export default CommentTable;