import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "./UserSlice";

const User = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    userId: "",
    date: "",
  });
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
    setUserDetails({ id: "", userId: "", date: "" });
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
        <label htmlFor="id">id : </label>
        <input
          type="text"
          name="id"
          value={userDetails.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="userId">userId : </label>
        <input
          type="text"
          name="userId"
          value={userDetails.userId}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="date">date : </label>
        <input
          type="text"
          name="date"
          value={userDetails.date}
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
            <th>id :</th>
            <th>userId :</th>
            <th>date : </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.users &&
            allUsers.users.map((usr) => {
              return (
                <tr>
                  <td>{usr.id}</td>
                  <td>{usr.userId}</td>
                  <td>{usr.date}</td>
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
