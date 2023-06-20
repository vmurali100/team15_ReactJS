import React from "react";
import { PhotoContextConsumer } from "./Photocontext";

export const Photoform = () => {
  return (
    <div>
      <PhotoContextConsumer>
        {(value) => {
          return (
          <form>
            <label htmlFor="albumId">AlbuamId:</label>
            <input
              type="text"
              name="albumId"
              value={value.users.albumId}
              onChange={value.handleChange}
            />
            <br />
            <label htmlFor="id">Id:</label>
            <input
              type="text"
              name="id"
              value={value.users.id}
              onChange={value.handleChange}
            />
            <br />
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={value.users.title}
              onChange={value.handleChange}
            />
            <br />
            <label htmlFor="url">Url:</label>
            <input
              type="text"
              name="url"
              value={value.users.url}
              onChange={value.handleChange}
            />
            <br />
            <label htmlFor="thumbnailUrl">ThumbnailUrl:</label>
            <input
              type="text"
              name="thumbnailUrl"
              value={value.users.thumbnailUrl}
              onChange={value.handleChange}
            />
            <br />
            {value.isEdit ? (
              <button type="button" onClick={value.updateUser}>
                UpdateUser
              </button>
            ) : (
              <button type="button" onClick={value.Adduser}>
                AddUser
              </button>
            )}
          </form>
          )
        }}
      </PhotoContextConsumer>
    </div>
  );
};