/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../User.slice";

const StudentDetails = () => {
    
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confrimpassword: "",
    gender: "",
    uploads: [],
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
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? Array.from(files) // Convert FileList to an array
        : value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };

  const clearForm = () => {
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      gender: "",
      uploads: [],
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
        <label htmlFor="name"> Name : </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="username">User Name : </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="confirmpassword">Confirm password : </label>
        <input
          type="confirmpassword"
          name="confirmpassword"
          value={user.confirmpassword}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
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
        <br/>
        <label htmlFor="uploads"> Choose the images : </label>
        <input
          type="file"
          id="uploads"
          name="uploads"
          accept=".jpg, .jpeg, .png, .svg, .gif"
          multiple
          onChange={handleChange}
        />
        <br />
        <br/>
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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      ></link>
      <table className="table table-dark table-striped">
        <thead style={{ background: "#212529" }}>
          <tr>
            <th> Name </th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Gender</th>
            <th>Images</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>{usr.gender}</td>
                <td>
                  {usr.uploads.map((upload, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(upload)}
                      alt={`Image ${index}`}
                      style={{ width: "60px", height: "60px" }}
                    />
                  ))}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr, i);
                    }}
                    id="edit"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(i);
                    }}
                    id="delete"
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
