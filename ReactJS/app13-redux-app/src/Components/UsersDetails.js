import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Users.slice";

const UsersDetails = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [index,setIndex] = useState(0)

  const allUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUser(user));
    clearForm();
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
    });
  };
  const handleEdit = (usr,i) => {
    setUser(usr)
    setIsEdit(true);
    setIndex(i)
  };
  const handleUpdate = () => {
    let newUser={...user}
    newUser['index'] = index;
    dispatch(updateUser(newUser))
    clearForm()
    setIsEdit(false)
  };
  const handleDelete=(i)=>{
    dispatch(deleteUser(i))
  }
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
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            Update User
          </button>
        ) : (
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        )}
      </form>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name</th>
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
