import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Student.Slice";

const StudentDetails = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    dob: "",
    email: "",
    forget: "",
    password: "",
    phone: "",
    confrompassword: "",
    checkboxValue: false,
    checkboxValue1: false,
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
      forget: "",
      password: "",
      confrompassword: "",
      Phone: "",
      checkboxValue: "",
      checkboxValue1: "",
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
        <label htmlFor="email">Forget Email : </label>
        <input
          type="email"
          name="forget"
          value={user.forget}
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
        <label htmlFor="confrompassword">Confrom Password : </label>
        <input
          type=" confrompassword"
          name="confrompassword"
          value={user.confrompassword}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="phone">Phone No : </label>
        <input
          type="phone"
          name="phone"
          value={user.phone}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="checkboxValue">He Is Working Or Not:</label>
        <input
          type="checkbox"
          name="checkboxValue"
          checked={user.checkboxValue}
          onChange={handleChange}
        />
        yes
        <input
          type="checkbox"
          name="checkboxValue1"
          checked={user.checkboxValue1}
          onChange={handleChange}
        />
        No
        <br />
        <label htmlFor="gender">Gender:</label>
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
            <th>Forget Email</th>
            <th>Password</th>
            <th>Confrom Password</th>
            <th>Phone No</th>
            <th>He Is Working Or Not</th>
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
                <td>{usr.forget}</td>
                <td>{usr.password}</td>
                <td>{usr.confrompassword}</td>
                <td>{usr.phone}</td>
                <td>
                  {usr.checkboxValue ? "Yes" : ""}
                  {usr.checkboxValue1 ? "No" : ""}
                </td>{" "}
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

export default StudentDetails;
