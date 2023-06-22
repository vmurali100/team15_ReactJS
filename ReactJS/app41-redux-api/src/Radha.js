import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddusersAsync,
  DeleteUsersAsync,
  UpdateUsersAsync,
  getAllusersAsync,
} from "./Radha.Slice";

const Radha = () => {
  const [isEdit, setisEdit] = useState(false);
  const [UserDetalies, setUserDetalies] = useState({
    userId: "",
    id: "",
    title: "",
  });

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllusersAsync());
  }, []);
  const handleChange = (e) => {
    const newuser = { ...UserDetalies };
    newuser[e.target.name] = e.target.value;
    setUserDetalies(newuser);
  };
  const handleDelete = (usr) => {
    dispatch(DeleteUsersAsync(usr));
  };
  const handleEdit = (usr) => {
    setUserDetalies(usr);
    setisEdit(true);
  };
  const addUser = () => {
    dispatch(AddusersAsync(UserDetalies));

    clearForm();
  };
  const clearForm = () => {
    setUserDetalies({
      userId: "",
      id: "",
      title: "",
    });
  };

  const updateUser = () => {
    dispatch(UpdateUsersAsync(UserDetalies));
    setisEdit(false);
    clearForm();
  };
  return (
    <div>
      <h1>King Kohli</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Id</th>
            <th>Title</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers &&
            allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.userId}</td>
                  <td>{usr.id}</td>
                  <td>{usr.title}</td>

                  <td>
                    <button
                      onClick={() => {
                        handleEdit(usr);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br></br>
      <hr></hr>
      <form>
        <label htmlFor="userId">UserId:</label>
        <input
          type="text"
          name="userId"
          value={UserDetalies.userId}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br></br>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          name="id"
          value={UserDetalies.id}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br></br>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={UserDetalies.title}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br></br>

        <br></br>
        {isEdit ? (
          <button onClick={updateUser} type="button">
            UpdateUser
          </button>
        ) : (
          <button onClick={addUser} type="button">
            AddUser
          </button>
        )}

        <br></br>
      </form>
    </div>
  );
};
export default Radha;
