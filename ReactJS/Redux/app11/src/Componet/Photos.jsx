import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../userSlice";

const Photos = () => {
  const [userDetails, setUserDetails] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const handleUpdate = () => {
    dispatch(handleUpdateUserAsync(userDetails));
    clearUser();
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addUser = () => {
    dispatch(handleAddUserAsync(userDetails));
    clearUser();
  };

  const clearUser = () => {
    setUserDetails({
      albumId: "",
      id: "",
      title: "",
      url: "",
      thumbnailUrl: "",
    });
  };

  const handleDelete = (user) => {
    dispatch(deleteUserAsync(user));
  };

  const handleEdit = (user) => {
    setUserDetails(user);
    setIsEdit(true);
  };

  return (
    <div>
      <form>
        <label htmlFor="albumId">Album Id:</label>
        <input
          type="text"
          name="albumId"
          value={userDetails.albumId}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          name="id"
          value={userDetails.id}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={userDetails.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          name="url"
          value={userDetails.url}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="thumbnailUrl">Thumbnail URL:</label>
        <input
          type="text"
          name="thumbnailUrl"
          value={userDetails.thumbnailUrl}
          onChange={handleChange}
        />
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
            <th>Album Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail URL</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.users &&
            allUsers.users.map((user) => (
              <tr key={user.id}>
                <td>{user.albumId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>
                  <img src={user.url} alt="URL" />
                </td>
                <td>
                  <img src={user.thumbnailUrl} alt="Thumbnail URL" />
                </td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Photos;
