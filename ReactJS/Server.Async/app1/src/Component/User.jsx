import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../User.Slice";
import { useState } from "react";
const User = () => {
  const [userDetails, setuserDetails] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  useState(() => {
    dispatch(getUsersAsync());
  }, []);
  const allusers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const handleAddusr = () => {
    dispatch(handleAddUserAsync(userDetails));
    console.log(userDetails)
    clearForm();
  };
  const handlechange = (e) => {
    const userInfo = { ...userDetails };
    userInfo[e.target.name] = e.target.value;
    setuserDetails(userInfo);
  };
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
    console.log(usr);
  };
  const handleEdit = (users) => {
    setuserDetails(users);
    setIsEdit(true);
    console.log(users);
  };

  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails))
    clearForm()
    setIsEdit(false)
    console.log(userDetails)
  };
  const clearForm = () => {
    setuserDetails({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>USERID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allusers &&
            allusers.map((usr, i) => {
              return (
                <tr key={i}>
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
      <br />
      <hr />
      <form>
        <label htmlFor="userId">UserId</label>
        <br />
        <input
          type="text"
          name="userId"
          value={userDetails.userId}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="id">Id</label>
        <br />
        <input
          type="text"
          name="id"
          value={userDetails.id}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={userDetails.title}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          name="body"
          value={userDetails.body}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            UpdateUser
          </button>
        ) : (
          <button type="button" onClick={handleAddusr}>
            Adduser
          </button>
        )}
      </form>
    </div>
  );
};
export default User;
