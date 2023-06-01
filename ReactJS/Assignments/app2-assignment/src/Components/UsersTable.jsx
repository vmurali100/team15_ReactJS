import React from "react";
import { UserContextConsumer } from "./userContest";

const UsersTable = () => {
    const formatAddress=(address)=>{
        return <div>
            <p>{address.number} , {address.street}</p>
            <p>{address.city}</p>
            <p>{address.zipcode}</p>
            <p><b>Geo Location -</b> </p>
            <p>Long - {address.geolocation.long}</p>
            <p>Lat - {address.geolocation.lat}</p>
        </div>
    }
  return (
    <UserContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.users.map((usr,i)=> <tr>
                <td>{usr.id}</td>
                <td>{usr.name.firstname}</td>
                <td>{usr.name.lastname}</td>
                <td>{usr.email}</td>
                <td>{usr.username}</td>
                <td>{usr.password}</td>
                <td>{usr.phone}</td>
                <td>{formatAddress(usr.address)}</td>
                <td><button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button></td>
                <td><button onClick={()=>{value.handleDelete(usr)}}>Delete</button></td>
            </tr> )}
          </tbody>
        </table>
      )}
    </UserContextConsumer>
  );
};

export default UsersTable;
