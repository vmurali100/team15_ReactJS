import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateAsync,
} from "./UsersSlice";

const Userdetails = () => {
    const [isEdit, setisEdit] = useState(false);
  const [Data, setData] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsersAsync());
  });

  const addUser = () => {
    dispatch(handleAddUserAsync(Data));
  };
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };

  const handlechange = (e) => {
    const Details = { ...Data };
    Details[e.target.name] = e.target.value;
    setData(Details);
  };
  const handleUpdate = () => {
    dispatch(handleUpdateAsync(Data));
    setisEdit(false);
    clearData();
  };

  const handleEdit = (users) => {
    setData(users);
    setisEdit(true);
  };
  const clearData = () => {
    setData({
      albumId: "",
      id: "",
      title: "",
      url: "",
      thumbnailUrl: "",
    });
  };

  return (
    <div>
      <h6>THIS IS APP17-1-REDUX</h6>
      <br />
      <form>
        <label htmlFor="albumId">albumId : </label>
        <input
          type="text"
          name="albumId"
          value={Data.albumId}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="id">id : </label>
        <input
          type="text"
          name="id"
          value={Data.id}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="title">title : </label>
        <input
          type="text"
          name="title"
          value={Data.title}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="url">url : </label>
        <input
          type="text"
          name="url"
          value={Data.url}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="thumbnailUrl">thumbnailUrl : </label>
        <input
          type="text"
          name="thumbnailUrl"
          value={Data.thumbnailUrl}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            updateUser
          </button>
        ) : (
          <button onClick={addUser} type="button">
            Add user
          </button>
        )}
      </form>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers &&
            allUsers.map((usr,i) => {
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
                        handleEdit(usr);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(usr);
                      }}
                    >
                      DELETE
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
export default Userdetails;
