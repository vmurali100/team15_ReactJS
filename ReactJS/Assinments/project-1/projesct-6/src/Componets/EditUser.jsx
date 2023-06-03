import React from "react";
import { DilliContextConsumer } from "./userContest";


const EditUser = () => {
  return (
    <div>
      <DilliContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor=""> Name : </label>
              <input
                type="text"
                name="name"
                value={value.user.name}
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
              <br />
              <label htmlFor="">
                <b>Address : </b>
              </label>
              <br />
              <label htmlFor="">street :</label>
              <input
                type="text"
                name="address.street"
                value={value.user.address.street}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">suite :</label>
              <input
                type="text"
                name="address.suite"
                value={value.user.address.suite}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor=""> city :</label>
              <input
                type="text"
                name="address.city"
                value={value.user.address.city}
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
              <label htmlFor=""> phone: </label>
              <input
                type="text"
                name="phone"
                value={value.user.phone}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">website : </label>
              <input
                type="text"
                name="website"
                value={value.user.website}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              <label htmlFor="">
                <b>Company : </b>
              </label>
              <br />
              <label htmlFor="">name:</label>
              <input
                type="text"
                name="company.name"
                value={value.user.company.name}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">catchPhrase :</label>
              <input
                type="text"
                name="company.catchPhrase"
                value={value.user.company.catchPhrase}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">bs:</label>
              <input
                type="text"
                name="company.bs"
                value={value.user.company.bs}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br /><br />
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
      </DilliContextConsumer>
    </div>
  );
};

export default EditUser;
