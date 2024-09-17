import React from "react";
import { RadhaContextConsumer } from "./RadhaContext";

export const RadhaForm = () => {
  return (
    <div>
      <RadhaContextConsumer>
        {(value) => {
          return (
            <form>
              <label htmlFor="userId">userId:</label>
              <input
                type="text"
                name="userId"
                value={value.users.userId}
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
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                value={value.users.title}
                onChange={value.handlechange}
              />
              <br />
              {value.isEdit ? (
                <button type="button" onClick={value.updateuser}>
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
      </RadhaContextConsumer>
    </div>
  );
};
