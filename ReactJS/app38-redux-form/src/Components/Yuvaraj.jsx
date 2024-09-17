import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Radha.Slice";

const Yuvaraj = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    photo: [],
  });
  const handlechange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? Array.from(files)
        : value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };
  const dispatch = useDispatch();
  const handleAdduser = () => {
    dispatch(addUser(user));
  };

  return (
    <div>
      <h1>yuvaraj</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        male <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        female <br />
        <input
          type="radio"
          name="gender"
          value="other"
          checked={user.gender === "other"}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        other <br />
        <br />
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          name="photo"
          id="photo"
          accept=".jpg, .jpeg, .png, .svg, .gif"
          multiple
          onChange={(e) => {
            handlechange(e);
          }}
        />
      </form>
      <br />
      <button onClick={handleAdduser} type="button">
        Adduser
      </button>
      <br /><br />
      <hr />
      <table border={1}>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Photo</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map(()=>{
                <tr key={i}>
                    <td></td>
                </tr>
            })}
          </tbody>
      </table>
    </div>
  );
};
export default Yuvaraj;
