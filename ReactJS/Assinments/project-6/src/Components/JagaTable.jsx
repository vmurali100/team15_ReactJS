import React from "react";
import { JagaContextConsumer } from "./JagaContext";

const JagaTable = () => {
    const formatAddress=(address)=>{
        console.log(address)
        return <div>
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <p>{address.city}</p>
            <p>{address.zipcode}</p>
            {/* <p><b>Geo-</b></p>
            <p>Lat-{address.geo.lat}</p>
            <p>Lan-{address.geo.lat}</p> */}
        </div>

    }
    const formatCompany=(company)=>{
        return <div>
            <p>{company.name}</p>
            <p>{company.catchPhrase}</p>
            <p>{company.bs}</p>
        </div>

    }
  return (
    <JagaContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>

              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.Users.map((usr,i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
               
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
               
                <td>{formatAddress(usr.address)}</td>
                <td>{formatCompany(usr.company)}</td>
                <td>
                  <button onClick={()=>{value.handleEdit(usr,i)}}>Edit</button>
                </td>
                <td><button onClick={()=>{value.handleDelete(usr,i)}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </JagaContextConsumer>
  );
};
export default JagaTable;
