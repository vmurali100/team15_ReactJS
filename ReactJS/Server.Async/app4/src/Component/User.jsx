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
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);
  const Alluser = useSelector((state) => state.users.users);
  const handlechange = (e) => {
    const newuser = { ...userDetails };
    newuser[e.target.name] = e.target.value;
    setuserDetails(newuser);
  };
  const handleAdduser = () => {
    dispatch(handleAddUserAsync(userDetails));
    clearForm();
  };
  const handeleEdit = (users) => {
    setuserDetails(users);
    setIsEdit(true);
  };
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };
  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails));
    setIsEdit(false);
    clearForm();
  };
  const clearForm = () => {
    setuserDetails({
      albumId: "",
      id: "",
      title: "",
      url: "",
      thumbnailUrl: "",
    });
  };
  return (
    <div id="main">
      <table border={1}>
        <thead>
          <tr>
            <th>AlbumId</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>URL</th>
            <th>ThumbnailUrl</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {Alluser &&
            Alluser.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.albumId}</td>
                  <td>{usr.id}</td>
                  <td>{usr.title}</td>
                  <td>{usr.url}</td>
                  <td>{usr.thumbnailUrl}</td>
                  <td>
                    <button
                      onClick={() => {
                        handeleEdit(usr);
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
        <label htmlFor="albumId">AlbumId</label>
        <br />
        <input
          type="text"
          name="albumId"
          value={userDetails.albumId}
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
        <label htmlFor="url">URl</label>
        <br />
        <input
          type="text"
          name="url"
          value={userDetails.url}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="thumbnailUrl">ThumbnailUrl</label>
        <br />
        <input
          type="text"
          name="thumbnailUrl"
          value={userDetails.thumbnailUrl}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            Updateuser
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
