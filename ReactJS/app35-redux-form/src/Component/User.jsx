import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deleteuser, Updatauser, adduser } from "../User.Slice";

const User = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    Cpasword: "",
  });
  const handlechange = (e) => {
    const newusers = { ...user };
    newusers[e.target.name] = e.target.value;
    setUser(newusers);
  };
  const allusers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleadduser = () => {
    dispatch(adduser(user));
    clearForm();
  };
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIsEdit(true);
    setIndex(i);
  };
  const handleDelete = (i) => {
    dispatch(Deleteuser(i));
  };
  const clearForm = () => {
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
      Cpasword: "",
    });
  };
  const handleupdate = () => {
    let newuser = { ...user };
    newuser["index"] = index;
    dispatch(Updatauser(newuser));
    clearForm()
  };
  return (
    <div>
      <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={user.username}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="Cpasword"></label>
        <input
          type="pasword"
          name="Cpasword"
          placeholder="Confirm Password"
          value={user.Cpasword}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        {isEdit ? (
          <button type="button" onClick={handleupdate}>
            UpdateUser
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
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confird Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allusers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.Cpasword}</td>
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
export default User;
