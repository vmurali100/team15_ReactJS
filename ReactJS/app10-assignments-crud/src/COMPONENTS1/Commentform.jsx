import React from "react";
import { CommentContextConsumer } from "./Commentcontext";

export const CommentForm = () => {
  return (
    <div>
      <CommentContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor="postId">PostId:</label>
              <input
                type="text"
                name="postId"
                value={value.users.postId}
                onChange={value.handlechange}
              />
              <br />
              <label htmlFor="id">Id:</label>
              <input
                type="text"
                name="id"
                value={value.users.id}
                onChange={value.handlechange}
              />
              <br />

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={value.users.name}
                onChange={value.handlechange}
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={value.users.email}
                onChange={value.handlechange}
              />
              <br />
              <label htmlFor="body">Body:</label>
              <input
                type="text"
                name="body"
                value={value.users.body}
                onChange={value.handlechange}
              />
              <br />
              {value.isEdit ? (
                <button type="button" onClick={value.updateUser}>
                  UpdateUser
                </button>
              ) : (
                <button type="button" onClick={value.adduser}>
                  Adduser
                </button>
              )}
            </form>
          );
        }}
      </CommentContextConsumer>
    </div>
  );
};