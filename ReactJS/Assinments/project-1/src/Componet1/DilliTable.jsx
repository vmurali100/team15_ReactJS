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
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossorigin="anonymous"
              ></link>
              <table class="table table-dark table-striped">
                <thead style={{ background: "#212529" }}>
                  <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                    <br />
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
      </DilliContextConsumer>
    </div>
  );
};
