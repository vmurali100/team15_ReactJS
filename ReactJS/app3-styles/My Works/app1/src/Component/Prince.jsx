/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsersAsync,
  deleteUsersAsync,
  updateUsersAsync,
  getAllUsersAsync,
} from "./UsersSlice";

const Prince = () => {
  const [isEdit, setisEdit] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    Username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const formatAddress = (address) => {
    console.log(address);
    return (
      <div>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
        <p>
          <b>Geo-</b>
        </p>
        <p>Lat-{user.address && user.address.geo && user.address.geo.lat}</p>
        <p>Lan-{user.address && user.address.geo && user.address.geo.lng}</p>
      </div>
    );
  };
  const formatCompany = (company) => {
    return (
      <div>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    );
  };
  const dispatch = useDispatch();
  const AllUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, []);
  const handleEdit = (usr) => {
    setUser(usr);
    setisEdit(true);
  };
  const handleDelete = (usr) => {
    dispatch(deleteUsersAsync(usr));
  };
  const handlechange = (e) => {
    let newUser = { ...user };
    if (e.target.name.indexOf("company") > -1) {
      newUser.company[e.target.name.split(".")] = e.target.value;
    }
    if (e.target.name.indexOf("address") > -1) {
      console.log(newUser.address);
      console.log(e.target.name.split(".")[1]);
      let prop = e.target.name.split(".")[1];
      newUser.address[prop] = e.target.value;
    } else if (e.target.name.indexOf("geo") > -1) {
      newUser.address["geo"][e.target.name.split(".")[1]] = e.target.value;
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setUser(newUser);
  };
  const updateUser = () => {
    dispatch(updateUsersAsync(setUser));
    setisEdit(false);
    clearForm();
  };
  const AddUser = () => {
    dispatch(addUsersAsync(user));
    clearForm();
  };
  const clearForm = () => {
    setUser({
      id: "",
      name: "",
      username: "",

      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });
  };
  return (
    <div>
      <h2>Indian Crickter</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {AllUsers &&
            AllUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{formatAddress(usr.address)}</td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>

                <td>{formatCompany(usr.company)}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr);
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
            ))}
        </tbody>
      </table>
      <br></br>
      <hr></hr>
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
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          value={user.username}
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
        <br />
        <label htmlFor="">
          <b>Address:</b> <br />
        </label>
        <br />
        <label htmlFor="">Street:</label>
        <input
          type="text"
          name="address.street"
          value={user.address.street}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Suite:</label>
        <input
          type="text"
          name="address.suite"
          value={user.address.suite}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="address.city"
          value={user.address.city}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Zipcode:</label>
        <input
          type="text"
          name="address.zipcode"
          value={user.address.zipcode}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <br></br>
        <label htmlFor="">
          <b>Geo</b>
        </label>
        <br />
        <label htmlFor="lat">Lat:</label>
        <input
          type="text"
          name="geo.lat"
          disabled={isEdit}
          value={user.address && user.address.geo && user.address.geo.lat}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="lag">Lag:</label>
        <input
          type="text"
          name="geo.lag"
          disabled={isEdit}
          value={user.address && user.address.geo && user.address.geo.lng}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">Website</label>
        <input
          type="text"
          name="website"
          value={user.website}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">
          <b>Company:</b>
        </label>{" "}
        <br />
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="company.name"
          value={user.company.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">CatchPhrase:</label>
        <input
          type="text"
          name="company.nacatchPhraseme"
          value={user.company.catchPhrase}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Bs:</label>
        <input
          type="text"
          name="company.bs"
          value={user.company.bs}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={updateUser}>
            UpdateUser
          </button>
        ) : (
          <button type="button" onClick={AddUser}>
            AddUser
          </button>
        )}
      </form>
    </div>
  );
};
export default Prince;
