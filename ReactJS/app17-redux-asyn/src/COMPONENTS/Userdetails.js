import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateAsync,
} from "../UsersSlice";

const Userdetails = () => {
  const [Data, setData] = useState({ userId: "", id: "", title: "", body: "" });
  const [isEdit, setisEdit] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  console.log(",allUsers", allUsers);
  useState(() => {
    dispatch(getUsersAsync);
  }, []);

  const handleChange = (e) => {
    const Details = { ...Data };
    Details[e.target.name] = e.target.value;
    setData(Details);
  };
  const addUser = () => {
    dispatch(handleAddUserAsync(Data));
    clearData();
  };

  const handleUpdate = () => {
    dispatch(handleUpdateAsync(Data))
    clearData()
    setisEdit(false)
  };

  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };
  const handleEdit = (user) => {
    setData(user);
    setisEdit(true);
  };

  const clearData = () => {
    setData({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };
  return (
    <div>
      <h2>this is Userdetails</h2>
      <br />
      <form>
        <label htmlFor="userId">userId :</label>
        <input
          type="text"
          name="userId"
          value={Data.userId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="id">id :</label>
        <input
          type="text"
          name="id"
          value={Data.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="title">title :</label>
        <input
          type="title"
          name="title"
          value={Data.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="body">body :</label>
        <input
          type="body"
          name="body"
          value={Data.body}
          onChange={(e) => {
            handleChange(e);
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
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
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
export default Userdetails;
