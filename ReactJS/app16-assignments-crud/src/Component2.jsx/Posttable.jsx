import React from "react";
import { PostContextConsumer } from "./PostContext";


const Posttable = () => {
  
  return (
    <div>
      <PostContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>User Id</td>
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
      </PostContextConsumer>
    </div>
  );
};
export default Posttable;