import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Userslice";

const UserDetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [index,setindex] = useState(0)
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });
  const allUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleaddUser = () => {
    dispatch(addUser(user));
    clearform();
    
   
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleUpdate = () => {
    let newUsers={...user}
    newUsers["index"]=index
   dispatch(updateUser(newUsers))
   clearform();
   setIsEdit(false)

  };

  const handleEdit = (usr,i) => {
    setUser(usr)
    setindex(i)
    setIsEdit(true)
    
  };
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };

  const clearform=()=>{
    setUser({
        fname:"",
        lname: "",
    })
  }
  return (
    <div>
      <h2>this is h2</h2>
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
export default UserDetails;
