import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deleteuser, Updateusers, adduser } from "../Reddy.Slice";
const Reddy = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    msgsubject: "",
    message: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const allusers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handlechange = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };
  const handleadduser = () => {
    dispatch(adduser(user));
    clearForm();
  };
  const handleDelete = (i) => {
    dispatch(Deleteuser(i));
  };
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIsEdit(true);
    setIndex(i);
  };
  const clearForm = () => {
    setUser({
      username: "",
      email: "",
      phone: "",
      msgsubject: "",
      message: "",
    });
  };
  const handleUpdate = () => {
    let newuser = { ...user };
    newuser["index"] = index;
    dispatch(Updateusers(newuser));
    clearForm();
    setIsEdit(false)
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
            Updatauser
          </button>
        ) : (
          <button type="button" onClick={handleadduser}>
            Adduser
          </button>
        )}
      </form>
      <br />
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>YOUR NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>MESSAGE SUBJECT</th>
            <th>MESSAGE</th>
            <th>EDIT</th>
            <th>DELETE</th>
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
export default Reddy;
