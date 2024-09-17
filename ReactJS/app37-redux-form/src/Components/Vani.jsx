import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, deleteUser, updateUser } from "../Vani.Slice";

const Vani = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    msgsubject: "",
    message: "",
  });
  const allusers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleadduser = () => {
    dispatch(addUsers(user));
    ClearForm();
  };
  const handlechange = (e) => {
    const newusers = { ...user };
    newusers[e.target.name] = e.target.value;
    setUser(newusers);
  };
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIndex(i);
    setIsEdit(true);
  };
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };
  const ClearForm = () => {
    setUser({
      username: "",
      email: "",
      phone: "",
      msgsubject: "",
      message: "",
    });
  };
  const handleUpdate = () => {
    let newusers = { ...user };
    newusers["index"] = index;

    dispatch(updateUser(newusers));
    ClearForm();
    setIsEdit(false);
  };

  return (
    <div>
      <form>
        <h1>Contact Form</h1>
        <label htmlFor="username">YourName</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="phone">PHONE</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="msgsubject">message subject</label>
        <select
          name="msgsubject"
          value={user.msgsubject}
          onChange={(e) => {
            handlechange(e);
          }}
        >
          <option value="">select</option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="Other">Other</option>
        </select>{" "}
        <br />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          value={user.message}
          onChange={(e) => {
            handlechange(e);
          }}
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            UpdateUser
          </button>
        ) : (
          <button type="button" onClick={handleadduser}>
            Adduser
          </button>
        )}
      </form>
      <br />
      <br />
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>msgsubject</th>
            <th>Message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allusers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
                <td>{usr.msgsubject}</td>
                <td>{usr.message}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(i);
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

export default Vani;
