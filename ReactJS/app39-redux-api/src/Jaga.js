import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUsersAsync,
  getAllusersAsync,
  handleAddUserAsync,
  handleUpdateAsync,
} from "./Jaga.Slice";
const Jaga = () => {
  const [isEdit, setisEdit] = useState(false);

  const [UserDetalies, setUserDetalies] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  // console.log(",allUsers",allUsers)
  useState(() => {
    dispatch(getAllusersAsync);
  }, []);

  const addUser = () => {
    dispatch(handleAddUserAsync(UserDetalies));
    ClearForm();
  };
  const handleChange = (e) => {
    const Allusers = { ...UserDetalies };
    Allusers[e.target.name] = e.target.value;
    setUserDetalies(Allusers);
  };
  const ClearForm = () => {
    setUserDetalies({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };
  const handleDelete = (usr) => {
    dispatch(deleteUsersAsync(usr));
  };
  const handleEdit = (usr) => {
    setUserDetalies(usr);
    setisEdit(true);
  };
  const updateUser = () => {
    dispatch(handleUpdateAsync(UserDetalies));
    ClearForm();
    setisEdit(false)
  };
  return (
    <div>
      <h2>We love Country</h2>
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
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          name="body"
          value={UserDetalies.body}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
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
      <br></br>
      <hr></hr>
      <table border={1}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.users &&
            allUsers.users.map((usr) => {
              return (
                <tr>
                  <td>{usr.userId}</td>
                  <td>{usr.id}</td>
                  <td>{usr.title}</td>
                  <td>{usr.body}</td>
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
    </div>
  );
};
export default Jaga;
