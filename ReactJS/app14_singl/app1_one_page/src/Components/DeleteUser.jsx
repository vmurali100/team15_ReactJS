/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import Mouni from "./Mouni";



const DeleteUser = () => {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  useEffect(() => {
    fetch("http://localhost:3000/student/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setuser(data);
      });
  }, []);
  const ConfirmDelete = () => {
    fetch("http://localhost:3000/student/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
      </ul>
      <button className="btn btn-danger" onClick={ConfirmDelete}>
        ConfirmDelete
      </button>
    </div>
  );
};
export default DeleteUser;
