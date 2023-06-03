import React from "react";
import { PrinceContextConsumer } from "./UserContest";



const EditUser = () => {
  return (
    <div>
      <PrinceContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor="">User Id : </label>
              <input
                type="text"
                name="userId"
                value={value.user.userId}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Id : </label>
              <input
                type="text"
                name="id"
                value={value.user.id}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Title : </label>
              <input
                type="text"
                name="title"
                value={value.user.title}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Completed : </label>
              <input
                type="text"
                name="completed"
                value={value.user.completed}
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
      </PrinceContextConsumer>
    </div>
  );
};

export default EditUser;
