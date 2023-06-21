import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllusersAsync,
  handleAddUserAsync,
  handleDeleteAsync,
  handleUpdateUserasync,
} from "./Vani.Slice";
import { useEffect } from "react";
const Vani = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [UserDetalies, setUserDetalies] = useState({
    postId: "",
    id: "",
    name: "",
    email: "",
    body: "",
  });
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getAllusersAsync());
  }, []);
  const addUser = () => {
    dispatch(handleAddUserAsync(UserDetalies));
    console.log(UserDetalies);
    ClearForm();
  };
  const handleChange = (e) => {
    const newUsers = { ...UserDetalies };
    newUsers[e.target.name] = e.target.value;
    setUserDetalies(newUsers);
  };
  const ClearForm = () => {
    setUserDetalies({
      postId: "",
      id: "",
      name: "",
      email: "",
      body: "",
    });
  };
  const handleEdit = (usr) => {
    setUserDetalies(usr);
    setIsEdit(true);
  };
  const handleDelete = (usr) => {
    dispatch(handleDeleteAsync(usr));
  };
  const updateUser = () => {
    dispatch(handleUpdateUserasync(UserDetalies));
    ClearForm();
    setIsEdit(false);
  };
  return (
    <div>
      <h1>Yuvi hit six sixes in a over</h1>
      <form>
        <label htmlFor="postId">PostId:</label>
        <input
          type="text"
          name="postId"
          value={UserDetalies.postId}
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={UserDetalies.name}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={UserDetalies.email}
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
            <th>PostID</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers &&
            allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.postId}</td>
                  <td>{usr.id}</td>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
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
export default Vani;
