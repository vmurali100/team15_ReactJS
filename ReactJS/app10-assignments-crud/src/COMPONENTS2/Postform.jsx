import React from "react";
import { PostContextConsumer } from "./Postcontext";

export const Postform = () => {
  return (
    <div>
      <PostContextConsumer>
        {(value) => {
          return (
            <form>
              <label htmlFor="userId">UserId</label>
              <input
                type="text"
                name="userId"
                value={ value.users.userId}
                onChange={value.handleChange}
              />
              <br></br>
              <label htmlFor="id">ID</label>
              <input
                type="text"
                name="id"
                value={value.users.id}
                onChange={value.handleChange}
              />
              <br></br>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={value.users.title}
                onChange={value.handleChange}
              />
              <br></br>
              <label htmlFor="body">Body</label>
              <input
                type="text"
                name="body"
                value={value.users.body}
                onChange={value.handleChange}
              />
              <br></br>
              {value.isEdit ? (
                <button type="button" onClick={value.Updateuser}>
                  UpdateUser
                </button>
              ) : (
                <button type="button" onClick={value.Adduser}>
                  AddUser
                </button>
              )}
            </form>
          );
        }}
      </PostContextConsumer>
    </div>
  );
};