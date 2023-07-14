/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsersFromServer();
  }, []);

  const getUsersFromServer = async () => {
    const response = await fetch("http://localhost:3000/student/");
    const usersInfo = await response.json();
    console.log(usersInfo);
    setUsers(usersInfo);
  };

  const handleDelete = (usr) => {
    navigate("deleteUser", {
      state: {
        usr,
      },
    });
  };

  const handleEdit = (usr) => {
    navigate("editUser", { state: { usr } });
  };

  return (
    <div className="container">
      <h2>Welcome to Layout Component !!</h2>
      <table className="table">
        <thead>
          <tr>
           
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((usr, i) => (
              <tr key={i}>

                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleEdit(usr);
                    }}
                  >
                    Edit User
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(usr);
                    }}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Layout;
