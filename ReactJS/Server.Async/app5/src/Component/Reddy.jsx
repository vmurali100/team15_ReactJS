import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../ReddySlice";
const Reddy = () => {
  const [userdatils, setuserDatils] = useState({
    userId: "",
    id: "",
    title: "",
    completed: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  const Alluser = useSelector((state) => state.users.users);
  console.log(Alluser);
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };
  const handleEidt = (users) => {
    setuserDatils(users);
    setIsEdit(true);
  };
  const handleadduser = () => {
    dispatch(handleAddUserAsync(userdatils));
    clearForm()
  };
  const handlechange = (e) => {
    const newuser = { ...userdatils };
    newuser[e.target.name] = e.target.value;
    setuserDatils(newuser);
  };
  const handleUpdateuser = () => {
    dispatch(handleUpdateUserAsync(userdatils));
    setIsEdit(false);
    clearForm()
  };
  const clearForm=()=>{
    setuserDatils({
        userId: "",
    id: "",
    title: "",
    completed: "",
    })
  }
  return (
    <div>
      <h1>Hello Iam Api 5</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>Title</th>
            <th>completed</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Alluser &&
            Alluser.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.userId}</td>
                  <td>{usr.id}</td>
                  <td>{usr.title}</td>
                  <td>{usr.completed}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEidt(usr);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(usr);
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
      <br />
      <hr />
      <form>
        <label htmlFor="userId">UserId</label>
        <br />
        <input
          type="text"
          name="userId"
          value={userdatils.userId}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="id">Id</label>
        <br />
        <input
          type="text"
          name="id"
          value={userdatils.id}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={userdatils.title}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="completed">Completed</label>
        <br />
        <input
          type="text"
          name="completed"
          value={userdatils.completed}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        {isEdit ? (
          <button type="button" onClick={handleUpdateuser}>
            Updateuser
          </button>
        ) : (
          <button type="button" onClick={handleadduser}>
            Adduser
          </button>
        )}
      </form>
    </div>
  );
};
export default Reddy;
