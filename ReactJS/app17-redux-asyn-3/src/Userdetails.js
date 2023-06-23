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
  const [userDetails, setUserDetails] = useState({ postId: "", id: "" ,name:"",email:"",body:""});
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  useState(() => {
    dispatch(getUsersAsync());
  }, []);
  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails))
    clearUser()
    setIsEdit(false)
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
    setUserDetails({ postId: "", id: "" ,name:"",email:"",body:""});
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
        <label htmlFor="postId">postId : </label>
        <input
          type="text"
          name="postId"
          value={userDetails.postId}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
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
        <label htmlFor="name">name : </label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="email">email : </label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="body">body : </label>
        <input
          type="text"
          name="body"
          value={userDetails.body}
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
            <th>postId :</th>
            <th>id :</th>
            <th>name : </th>  
            <th>email : </th>
            <th>body : </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.users &&
            allUsers.users.map((usr) => {
              return (
                <tr>
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

export default User;