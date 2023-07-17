import React from 'react'

const Userform = ({handlechange,handleSubmit,user,btnText}) => {
  return (
    <div>
          <form>
        {/* <label htmlFor="id"></label><br />
            <input type="text" name="id" value={user.id} /><br /><br /> */}
        <label htmlFor="name">NAME</label>
        <br />
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="age">AGE</label>
        <br />
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="email">EMAIL</label>
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <br />
        <button type="button" onClick={handleSubmit}>
          {btnText}
        </button>
      </form>
    </div>
  )
}
export default Userform