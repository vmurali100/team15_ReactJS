import React from "react";
import { JagaContextConsumer } from "./JagaContext";

export const JagaForm = () => {
  return (
    <div>
      <JagaContextConsumer>
        {(value) => {
          <form>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={value.user.name}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />
            <br />
            <label htmlFor="">UserName</label>
            <input
              type="text"
              name="username"
              value={value.user.username}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />
            <br />
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={value.user.email}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="">
              <b>Address:</b>
            </label>
            <br />
            <label htmlFor="">Street:</label>
            <input
              type="text"
              name="address.street"
              value={value.user.address.street}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">Suite:</label>
            <input
              type="text"
              name="address.suite"
              value={value.user.address.suite}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">City:</label>
            <input
              type="text"
              name="address.city"
              value={value.user.address.city}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">Zipcode:</label>
            <input
              type="text"
              name="address.zipcode"
              value={value.user.address.zipcode}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />{" "}
            <br />
            <br></br>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              value={value.user.phone}
              onChange={(e) => {
                value.handlechange(e);
              }}
            />
            <br />
            <label htmlFor="">Website</label>
            <input
              type="text"
              name="website"
              value={value.user.website}
              onChange={(e) => {
                value.handlechange(e);
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
              value={value.user.company.name}
              onChange={(e) => {
                value.handlechange(e);
              }}
            /> <br />
            <label htmlFor="">CatchPhrase:</label>
            <input
              type="text"
              name="company.nacatchPhraseme"
              value={value.user.company.catchPhrase}
              onChange={(e) => {
                value.handlechange(e);
              }}
            /> <br />
            <label htmlFor="">Bs:</label>
            <input
              type="text"
              name="company.bs"
              value={value.user.company.bs}
              onChange={(e) => {
                value.handlechange(e);
              }}
            /> <br />
            <button>UpdateUser</button>
          </form>;
        }}
      </JagaContextConsumer>
    </div>
  );
};
