import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Amma = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState([]);
  useEffect(() => {
    getallusers();
  }, []);
  const getallusers = async () => {
    const respones = await (await fetch(" http://localhost:3000/User")).json();
    setUser(respones);
  };
  const Delete = (usr) => {
    console.log(usr);
    navigate("/Delete/" + usr.id);
  };
  const handleEdit = (usr) => {
    navigate("/Edit/" + usr.id);
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {User.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.age}</td>
                <td>{usr.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      Delete(usr);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Amma;
