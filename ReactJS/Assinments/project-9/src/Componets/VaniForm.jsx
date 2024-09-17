import React from "react";
import { VaniContextConsumer } from "./VaniContext";

export const VaniForm = () => {
  return (
    <div>
      <VaniContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor="id">ID</label>
              <input
                type="text"
                name="id"
                value={value.users.id}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <br />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={value.users.name}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <br />
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                value={value.users.username}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={value.users.email}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
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
                value={value.users.address.street}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">suite :</label>
              <input
                type="text"
                name="address.suite"
                value={value.users.address.suite}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor=""> city :</label>
              <input
                type="text"
                name="address.city"
                value={value.users.address.city}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <label htmlFor="">Zipcode :</label>
              <input
                type="text"
                name="address.zipcode"
                value={value.users.address.zipcode}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={value.users.phone}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <br />
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                value={value.users.website}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              <br />
              <br />
              <label htmlFor="">
                <b>Company : </b>
              </label>
              <label htmlFor="">name:</label>
              <input
                type="text"
                name="company.name"
                value={value.users.company.name}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />
              {""} <br />
              <br />
              <label htmlFor="">catchPhrase</label>
              <input
                type="text"
                name="company.catchPhrase"
                value={value.users.company.catchPhrase}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              {value.isEdit ? (
                <button type="button" onClick={value.Updatauser}>
                  Updatauser
                </button>
              ) : (
                <button type="button" onClick={value.Adduser}>
                  Adduser
                </button>
              )}
            </form>
          );
        }}
      </VaniContextConsumer>
    </div>
  );
};
