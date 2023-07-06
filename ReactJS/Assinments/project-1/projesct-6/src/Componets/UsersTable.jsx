import React from "react";
import { DilliContextConsumer } from "./userContest";

const UsersTable = () => {
  const formatAddress = (address) => {
    return (
      <div>
        <p>
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
        <p>Geo</p>
        {address.geo && (
          <p>
            Lat {address.geo.lat}<br/> Lon {address.geo.lng}
          </p>
        )}
      </div>
    );
  };

  return (
    <DilliContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
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
            {value.users.map((usr, i) => (
              <tr key={usr.id}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{formatAddress(usr.address)}</td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
                <td>
                  {usr.company && (
                    <p>
                      {usr.company.name}, {usr.company.catchPhrase},{" "}
                      {usr.company.bs}
                    </p>
                  )}
                </td>
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
  );
};

export default UsersTable;
