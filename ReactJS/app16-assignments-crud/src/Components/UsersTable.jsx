import React from "react";
import { UserContextConsumer } from "./UserContext";


const Userstable = () => {
  
  return (
    <div>
      <UserContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>name</td>
                    <td>phone</td>
                    <td>website</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>username</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.id}</td>
                      <td>{usr.name}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.website}</td>
                      <td>{usr.email}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.username}</td>
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
      </UserContextConsumer>
    </div>
  );
};
export default Userstable;