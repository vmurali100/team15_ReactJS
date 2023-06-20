import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Usersslice";

const Userdetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [index, setindex] = useState(0);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const allUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleaddUser = () => {
    dispatch(addUser(user));
    clearform();
  };
  const handleChange = (e) => {
    const newUsers = { ...user };
    newUsers[e.target.name] = e.target.value;
    setUser(newUsers);
  };
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };
  const handleEdit = (usr,i) => {
    setIsEdit(true)
    setindex(i)
    setUser(usr)
  };
  const handleUpdate = () => {
    let newUsers ={...user}
    newUsers["index"]=index
    dispatch(updateUser(newUsers))
    clearform()
    setIsEdit(false)
  };

  const clearform = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h6>This is userdetails from app14</h6>
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
        <label htmlFor="email">email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="password">password : </label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            Update User
          </button>
        ) : (
          <button type="button" onClick={handleaddUser}>
            Add User
          </button>
        )}
      </form>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name</th>
            <th>email</th>
            <th>password</th>
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
                <td>{usr.email}</td>
                <td>{usr.password}</td>
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
export default Userdetails;
