/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import { getUsersAsync } from "../StudentSlice";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);
  console.log(users)

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.password}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default User;
