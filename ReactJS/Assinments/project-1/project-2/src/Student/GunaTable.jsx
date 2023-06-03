import React from "react";
import { GunaContextConsumer } from "./GunaContext";

export const GunaTable = () => {
  return (
    <div>
      <GunaContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Userid</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <th>{usr.userId}</th>
                      <th>{usr.id}</th>
                      <th>{usr.title}</th>
                      <th>{usr.body}</th>
                      <th>
                        <button
                          onClick={() => {
                            value.handeledit(usr, i);
                          }}
                        >
                          Edit
                        </button>
                      </th>
                     <th><button onClick={() =>{
                        value.handeldelete(usr,i);
                     }}>Delete</button></th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </GunaContextConsumer>
    </div>
  );
};
