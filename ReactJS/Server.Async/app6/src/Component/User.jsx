import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getUsersAsync,
  handleAddUserAsync,
  handleUpdateUserAsync,
} from "../UserSlice";

const User = () => {
  const [userDetails, setuserDetails] = useState({
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
  const [isEdit, setIsEdit] = useState(false);
  const fromatAddress = (address) => {
    return (
      <div>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
        <p>
          <b>Geo-</b>
        </p>
        {/* <p>lat-{address.geo.lat}</p>
        <p>lng-{address.geo.lng}</p>  */}
      </div>
    );
  };
  const fromatComapny = (company) => {
    return (
      <div>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  const handleDelete = (usr) => {
    dispatch(deleteUserAsync(usr));
  };
  const handlechange = (e) => {
   const newUser = { ...userDetails };
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
    setuserDetails(newUser);
  };
  const handleadduser = () => {
    dispatch(handleAddUserAsync(userDetails));
    clearForm();
  };
  const handleEdit = (usr) => {
    setuserDetails(usr);
    setIsEdit(true);
  };
  const updateUser = () => {
    dispatch(handleUpdateUserAsync());
    setIsEdit(false);
    clearForm();
  };
  const clearForm = () => {
    setuserDetails({
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
  const Alluser = useSelector((state) => state.users.users);
  return (
    <div id="Reddy">
      <h1>My dear frnd</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {Alluser &&
            Alluser.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.id}</td>
                  <td>{usr.name}</td>
                  <td>{usr.username}</td>
                  <td>{usr.email}</td>
                  <td>{fromatAddress(usr.address)}</td>
                  <td>{usr.phone}</td>
                  <td>{usr.website}</td>
                  <td>{fromatComapny(usr.company)}</td>
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
              );
            })}
        </tbody>
      </table>
      <br />
      <hr />
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          value={userDetails.username}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
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
          value={userDetails.address.street}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Suite:</label>
        <input
          type="text"
          name="address.suite"
          value={userDetails.address.suite}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="address.city"
          value={userDetails.address.city}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Zipcode:</label>
        <input
          type="text"
          name="address.zipcode"
          value={userDetails.address.zipcode}
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
          value={userDetails.address.geo.lat}
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
          value={userDetails.address.geo.lag}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          value={userDetails.phone}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">Website</label>
        <input
          type="text"
          name="website"
          value={userDetails.website}
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
          value={userDetails.company.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">CatchPhrase:</label>
        <input
          type="text"
          name="company.catchPhrase"
          value={userDetails.company.catchPhrase}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Bs:</label>
        <input
          type="text"
          name="company.bs"
          value={userDetails.company.bs}
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
          <button type="button" onClick={handleadduser}>
            AddUser
          </button>
        )}
      </form>
    </div>
  );
};
export default User;
