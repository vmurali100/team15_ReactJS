import React from "react";
import { JagaContextConsumer } from "./JagaContext";

export const JagaForm = () => {
  return (
    <div>
      <JagaContextConsumer>
        {(value) => {
          return (
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={value.User.name}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />
              <br />
              <label htmlFor="Username">UserName:</label>
              <input
                type="text"
                name="Username"
                value={value.User.Username}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={value.User.email}
                onChange={(e) => {
                  value.handlechange(e);
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
                value={value.User.address.street}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Suite:</label>
              <input
                type="text"
                name="address.suite"
                value={value.User.address.suite}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">City:</label>
              <input
                type="text"
                name="address.city"
                value={value.User.address.city}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
          
              <label htmlFor="">Zipcode:</label>
              <input
                type="text"
                name="address.zipcode"
                value={value.User.address.zipcode}
                onChange={(e) => {
                  value.handlechange(e);
                }} 
              />{" "}
              <br />

              <br></br>
              <label htmlFor=""><b>Geo</b></label><br />
              <label htmlFor="lat">Lat:</label>
              <input
                type="text"
                name="geo.lat"
                disabled={value.IsEdit}
                value={value.User.address.geo.lat}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />
              <br />
             
              <label htmlFor="lag">Lag:</label>
              <input
                type="text"
                name="geo.lag"
                disabled={value.IsEdit}
                value={value.User.address.geo.lag}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />
              <br />
              <label htmlFor="">Phone</label>
              <input
                type="text"
                name="phone"
                value={value.User.phone}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />
              <br />
              <label htmlFor="">Website</label>
              <input
                type="text"
                name="website"
                value={value.User.website}
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
                value={value.User.company.name}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">CatchPhrase:</label>
              <input
                type="text"
                name="company.nacatchPhraseme"
                value={value.User.company.catchPhrase}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Bs:</label>
              <input
                type="text"
                name="company.bs"
                value={value.User.company.bs}
                onChange={(e) => {
                  value.handlechange(e);
                }}
              />{" "}
              <br />
              {value.isEdit ? (
                <button type="button" onClick={value.updateUser}>
                  UpdateUser
                </button>
              ) : (
                <button type="button" onClick={value.AddUser}>
                  AddUser
                </button>
              )}
            </form>
          );
        }}
      </JagaContextConsumer>
    </div>
  );
};
