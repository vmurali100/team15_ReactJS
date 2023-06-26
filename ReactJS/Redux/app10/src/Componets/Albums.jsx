import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../usersSlice";

const User = () => {
  const [userDetails, setUserDetails] = useState({ userId: "", id: "" , title:"" });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  useState(() => {
    dispatch(getUsersAsync());
  }, []);
  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails));
    clearUser();
    setIsEdit(false);
  };
  const handleChange = (e) => {
    const userInfo = { ...userDetails };
    userInfo[e.target.name] = e.target.value;
    setUserDetails(userInfo);
  };
  const addUser = () => {
    dispatch(handleAddUserAsync(userDetails));
    clearUser();
  };
  const clearUser = () => {
    setUserDetails({ userId: "", id: "", title: "" });
  };
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };
  const handleEdit = (user) => {
    setUserDetails(user);
    setIsEdit(true);
  };
  return (
    <div>
      <form>
        <label htmlFor="userId">User Id </label>
        <input
          type="text"
          name="userId"
          value={userDetails.userId}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="id"> Id</label>
        <input
          type="text"
          name="id"
          value={userDetails.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="title">Title </label>
        <input
          type="text"
          name="title"
          value={userDetails.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            Update User
          </button>
        ) : (
          <button type="button" onClick={addUser}>
            Add User
          </button>
        )}
      </form>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
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

export default User;
