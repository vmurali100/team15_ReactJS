import React from "react";
import { PhotoContextConsumer } from "./PhotoContext";

const Phototable = () => {
  return (
    <div>
      <PhotoContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <table border={1}>
                <thead>
                  <tr>
                    <td>albumId</td>
                    <td>Id</td>
                    <td>title</td>
                    <td>url</td>
                    <td>thumbnailUrl</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {value.data.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.albumId}</td>
                      <td>{usr.id}</td>
                      <td>{usr.title}</td>
                      <td>{usr.url}</td>
                      <td>{usr.thumbnailUrl}</td>
                      <td>
                        <button
                          onClick={() => {
                            value.handleEdit(usr, i);
                          }}
                        >
                          EDIT
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            value.handleDelete(usr, i);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </PhotoContextConsumer>
    </div>
  );
};
export default Phototable;
