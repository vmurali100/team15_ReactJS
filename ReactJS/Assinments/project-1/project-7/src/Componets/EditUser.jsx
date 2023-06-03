import React from "react";
import { DilliContextConsumer } from "./UserContest";

const EditUser = () => {
  return (
    <div>
      <DilliContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor=""> Id : </label>
              <input
                type="text"
                name="id"
                value={value.user.id}
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
      </DilliContextConsumer>
    </div>
  );
};

export default EditUser;
