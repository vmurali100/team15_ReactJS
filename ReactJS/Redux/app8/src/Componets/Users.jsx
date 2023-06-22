/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersAsync } from "../UserSlice";

function Student() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);
  console.log(users);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Post Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Body</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.postId}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.body}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Student;
