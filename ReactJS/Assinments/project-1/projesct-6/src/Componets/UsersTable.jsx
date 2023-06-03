import React from "react";
import { DilliContextConsumer } from "./userContest";

const UsersTable = () => {
  const formatAddress = (address) => {
    return (
      <div>
        <p>
          {address.number} , {address.street}
        </p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
       
        
    
      </div>
    );
  };
  const formatCompany =(company)=>{
    return(
         <p>{company.name},
         {company.catchPhrase},{company.bs}
         </p>
    );
  }
  return<DilliContextConsumer>
      {(value) => (
      
        
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>website</th>
              <th>company</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.users.map((usr, i) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{formatAddress(usr.address)}</td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
                <td>{formatCompany(usr.company)}</td>
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
                      value.handleDelete(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DilliContextConsumer>
  
};

export default UsersTable;
