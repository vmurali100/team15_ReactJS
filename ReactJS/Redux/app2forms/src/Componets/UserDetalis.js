import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../User.slice";

const UsersDetails = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    dob: "",
    email: "",
    password: "",
    checkboxValue: false,
    gender: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);

  const allUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUser(user));
    clearForm();
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };

  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
      dob: "",
      email: "",
      password: "",
      checkboxValue: "",
      gender: "",
    });
  };
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIsEdit(true);
    setIndex(i);
  };
  const handleUpdate = () => {
    let newUser = { ...user };
    newUser["index"] = index;
    dispatch(updateUser(newUser));
    clearForm();
    setIsEdit(false);
  };
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="dob">date of borth : </label>
        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="checkboxValue">Working:</label>
        <input
          type="checkbox"
          name="checkboxValue"
          checked={user.checkboxValue}
          onChange={handleChange}
        />
        yes:No
        <br />
        <label htmlFor="radioButtonValue">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={handleChange}
        />{" "}
        male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={handleChange}
        />{" "}
        female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={user.gender === "other"}
          onChange={handleChange}
        />{" "}
        other
        <br />
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            Edit Users
          </button>
        ) : (
          <button type="button" onClick={handleAddUser}>
            Add Users
          </button>
        )}
      </form>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name</th>
            <th>Date of borth</th>
            <th>Email</th>
            <th>Password</th>
            <th>Working</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.dob}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.checkboxValue ? "Yes" : "No"}</td>{" "}
                <td>{usr.gender}</td>
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

export default UsersDetails;
