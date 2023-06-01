import React from "react";
import { UserContextConsumer } from "./userContest";

const EditUser = () => {
  return (
    <div>
      <UserContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor="">First Name : </label>
              <input
                type="text"
                name="firstname"
                value={value.user.name.firstname}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Last Name : </label>
              <input
                type="text"
                name="lastname"
                value={value.user.name.lastname}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">User Name : </label>
              <input
                type="text"
                name="username"
                value={value.user.username}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Email : </label>
              <input
                type="text"
                name="email"
                value={value.user.email}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Password : </label>
              <input
                type="text"
                name="password"
                value={value.user.password}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Phone : </label>
              <input
                type="text"
                name="phone"
                value={value.user.phone}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              <label htmlFor="">
                <b>Address : </b>
              </label>
              <br />
              <label htmlFor="">Number :</label>
              <input
                type="text"
                name="address.number"
                value={value.user.address.number}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">City :</label>
              <input
                type="text"
                name="address.city"
                value={value.user.address.city}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Street :</label>
              <input
                type="text"
                name="address.street"
                value={value.user.address.street}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Zipcode :</label>
              <input
                type="text"
                name="address.zipcode"
                value={value.user.address.zipcode}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              <label htmlFor="">
                <b>Geo Location</b>
              </label>
              <br />
              <label htmlFor="">Lang : </label>
              {console.log(value.isEdit)}
              <input
                type="text"
                name="geolocation.long"
                disabled={value.isEdit}
                value={value.user.address.geolocation.long}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Lat : </label>
              <input
                type="text"
                name="geolocation.lat"
                disabled={value.isEdit}
                value={value.user.address.geolocation.lat}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              {value.isEdit ? (
                <button type="button" onClick={value.handleUpdate}>
                  Update User
                </button>
              ) : (
                <button type="button" onClick={value.createUser}>
                  Create User
                </button>
              )}
            </form>
          );
        }}
      </UserContextConsumer>
    </div>
  );
};

export default EditUser;
