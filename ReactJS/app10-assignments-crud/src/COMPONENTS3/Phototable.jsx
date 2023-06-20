import React from "react";
import { PhotoContextConsumer } from "./Photocontext";

export const Phototable = () => {
  return (
    <div>
      <PhotoContextConsumer>
        {(value) => {
          return (
            <table border={1}>
              <thead>
                <tr>
                  <th>AlbuamId</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Url</th>
                  <th>ThumbnailUrl</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {value.data.map((usr, i) => (
                  <tr key={i}>
                    <th>{usr.albumId}</th>
                    <th>{usr.id}</th>
                    <th>{usr.title}</th>
                    <th>{usr.url}</th>
                    <th>{usr.thubnailUrl}</th>
                    <th>
                      <button
                        onClick={() => {
                          value.handleEdit(usr, i);
                        }}
                      >
                        Edit
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          value.handleDelete(usr, i);
                        }}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </PhotoContextConsumer>
    </div>
  );
};