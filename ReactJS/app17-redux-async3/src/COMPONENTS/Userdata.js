import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseEffect } from "react";
import { getUsersAsync } from "../Slice";

const UserData = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.users.users);

  UseEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);
  console.log(Users);

  return (
    <div>
      <h6>hi this is h6</h6>
      <table border={1}>
        <thead>
          <tr>
            <th>postId </th>
            <th>id</th>
            <th>name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* <tbody>
          {Users.map((Users) => {
            return (
              <tr key={Users.i}>
                <td>{Users.postId}</td>
                <td>{Users.id}</td>
                <td>{Users.name}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};
export default UserData;
