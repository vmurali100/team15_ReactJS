import React from "react";
import { VihaContextConsumer } from "./VihaContext";

export const ViharikaForm = () => {
  return (
  <div>
   <VihaContextConsumer>
    {(value)=>{
      return(
        
        <form>
          <label htmlFor="id">Id:</label>
          <input
            type="text"
            name="id"
            value={value.user.id}
            onChange={value.handleChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email"
            value={value.user.email}
            onChange={value.handleChange}
          />
          <br />
          <br />
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            name="username"
            value={value.user.username}
            onChange={value.handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={value.user.password}
            onChange={value.handleChange}
          />
          <br />
          <br />
          {value.isEdit ? (
            <button type="button" onClick={value.handleUpdate}>
              UpdateUser
            </button>
          ) : (
            <button type="button" onClick={value.handleAdd}>
              AddUser
            </button>
          )}
        </form>
     
      )
    }}
   </VihaContextConsumer>
  </div>
  );
};
