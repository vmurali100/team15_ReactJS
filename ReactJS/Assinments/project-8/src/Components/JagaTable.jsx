import React from "react";
import { JagaContextConsumer } from "./JagaContext";

export const JagaTable = () => {
  return (
    <div>
      <JagaContextConsumer>
        {(value)=>{
         return(
          <table border={1}>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                {/* <th>Completed</th> */}
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
                        {/* <td>{usr.completed}</td> */}
                        <td><button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button></td>
                        <td><button onClick={()=>{value.handleDelete(usr,i)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
          </table>
         )
        }}
      </JagaContextConsumer>
    </div>
  );
};
