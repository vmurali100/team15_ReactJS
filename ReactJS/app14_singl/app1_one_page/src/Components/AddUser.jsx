import React from "react";

const AddUser = ({ handlechange, user, HandleSumbit, btnText }) => {
  return (
    <div>
      <form>
        {/* <label htmlFor='id'>ID:</label>
          <input type="text" name="id" value={user.id}  onChange={(e)=>{handlechange(e)}}/><br /> */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <button
          type="button"
          onClick={HandleSumbit}
          className="btn btn-primary"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};
export default AddUser;
