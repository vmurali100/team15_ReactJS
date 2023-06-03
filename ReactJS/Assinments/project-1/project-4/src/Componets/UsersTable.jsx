import React from "react";
import { UserContextConsumer } from "./userCotest";


const UsersTable = () => {
  const formatAddress = (products) => {
    return (
      <div>
        <p>
          {products.productId} , {products.quantity}
        </p>
        <p>{products.quantity}</p>
        <p>{products.quantity}</p>
      </div>
    );
  };
  return (
    <UserContextConsumer>
      {(value) => (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Date</th>
              <th>prodects</th>
              <th>__v</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.users.map((usr, i) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.userId}</td>

                <td>{usr.date}</td>
                <td>{formatAddress(usr.products)}</td>
                <td>{usr.__v}</td>
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
    </UserContextConsumer>
  );
};

export default UsersTable;
