import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dilli = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState([]);
  useEffect(() => {
    getAllusers();
  }, []);
  const getAllusers = async () => {
    const responce = await (
      await fetch("http://localhost:3000/student")
    ).json();
    setuser(responce);
  };
  const handledelete = (usr) => {
    console.log(usr);
    navigate("/delete/" + usr.id);
  };
  const handleedit = (usr) => {
    navigate("/edit/" + usr.id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>NAme</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((usr, i) => {
            return (
              <tr>
                <th>{usr.id}</th>
                <th>{usr.name}</th>
                <th>{usr.age}</th>
                <th>{usr.email}</th>
                <th>
                  <button
                    onClick={() => {
                      handleedit(usr);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handledelete(usr);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Dilli;
