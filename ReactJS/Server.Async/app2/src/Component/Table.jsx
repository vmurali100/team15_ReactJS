import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteUserAsync,
  getUsersAysnc,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../UserSlice";

const Table = () => {
  const [userDetails, setuserDetails] = useState({
    userId: "",
    id: "",
    name: "",
    title: "",
    body: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  useState(() => {
    dispatch(getUsersAysnc());
  }, []);
  const allusers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersAysnc());
  }, [dispatch]);
  const handlechange = (e) => {
    const userinfo = { ...userDetails };
    userinfo[e.target.name] = e.target.value;
    setuserDetails(userinfo);
  };
  const handleAddusr = () => {
    dispatch(handleAddUserAsync(userDetails));
    clearForm()
  };
  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails));
    setIsEdit(false);
    clearForm()
  };
  const handleEdit = (users) => {
    setuserDetails(users);
    setIsEdit(true);
   
  };
  const handleDelete=(usr)=>{
    dispatch(deleteUserAsync(usr))
  }
  const clearForm=()=>{
    setuserDetails({
        postId: "",
        id: "",
        name: "",
        email: "",
        body: "",
    })
  }
  return (
    <div id="Reddy">
      <table border={1}>
        <thead>
          <tr>
            <th>POSTID</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BODY</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {allusers &&
            allusers.map((usr, i) => {
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
      <br />
      <hr />
      <form>
        <label htmlFor="postId">UserId</label>
        <br />
        <input
          type="text"
          name="postId"
          value={userDetails.postId}
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
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input
          type="text"
          name="email"
          value={userDetails.email}
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
export default Table;
