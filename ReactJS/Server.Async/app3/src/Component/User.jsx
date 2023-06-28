import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../UserSlice";
import { useState } from "react";
const User = () => {
  const [userDetails, setuserDetails] = useState({
    userId: "",
    id: "",
    title: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const allusers = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);
  const handlechange = (e) => {
    const newuser = { ...userDetails };
    newuser[e.target.name] = e.target.value;
    setuserDetails(newuser);
  };
  const handleAdduser = () => {
    dispatch(handleAddUserAsync(userDetails));
    console.log(userDetails);
    clearForm()
  };
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
    
  };
  const handleEdit = (users) => {
    setuserDetails(users);
    setIsEdit(true);
  };
  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails));
    setIsEdit(false);
    clearForm()
  };
  const clearForm=()=>{
    setuserDetails({
        userId: "",
        id: "",
        title: "",
    })
  }
  return (
    <div id="Reddy">
      <table border={1}>
        <thead>
          <tr>
            <th>USERSID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
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
        <label htmlFor="userId">USERID</label>
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
        <label htmlFor="id">ID</label>
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
        <label htmlFor="title">TITLE</label>
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
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            Upadateuser
          </button>
        ) : (
          <button type="button" onClick={handleAdduser}>
            Adduser
          </button>
        )}
      </form>
    </div>
  );
};
export default User;