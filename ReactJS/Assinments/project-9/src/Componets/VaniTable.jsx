import React from "react";
import { VaniContextConsumer } from "./VaniContext";

export const VaniTable = () => {
  const formataddress = (address) => {
    return (
      <div>
        <p>
          {address.number},{address.street}{" "}
        </p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
      </div>
    );
  };
  const formatcompany = (company) => {
    return (
      <div>
        <p>{company.name}</p>
        <p>
          {company.catchPhrase},{company.bs}
        </p>
      </div>
    );
  };
  return (
    <div>
      <VaniContextConsumer>
        {(value) => {
         console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANY</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {value.Data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.id}</td>
                      <td>{usr.name}</td>
                      <td>{usr.username}</td>
                      <td>{usr.email}</td>
                      <td>{formataddress(usr.address)}</td>
                      <td>{usr.phone}</td>
                      <td>{usr.website}</td>
                      <td>{formatcompany(usr.company)}</td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            value.handleEdit(usr, i);
                          }}
                        >
                          edit
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            value.handledelete(usr, i);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </VaniContextConsumer>
    </div>
  );
};
