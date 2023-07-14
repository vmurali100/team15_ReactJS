import React from "react";

const UserForm = ({ handleSubmit, isEdit, userDetails, handleChange }) => {
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          value={userDetails.fname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={userDetails.lname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          name="phone"
          value={userDetails.phone}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        {isEdit ? (
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Update User
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Add User
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
