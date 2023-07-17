import React from 'react'

 const Userform = ({userDetails,handlechange,handleSubmit}) => {
  return (
    <div>
         <form >
          <label htmlFor="name">Name</label> <br />
          <input type="text" name="name"value={userDetails.name} onChange={(e)=>{handlechange(e)}} /> <br /> <br />
          <label htmlFor="phone">ph no</label> <br />
          <input type="text" name="phone"value={userDetails.phone} onChange={(e)=>{handlechange(e)}} /> <br /> <br />
          <label htmlFor="email">email</label> <br />
          <input type="text" name="email"value={userDetails.email} onChange={(e)=>{handlechange(e)}} /> <br /> <br />
          <label htmlFor="password">password</label> <br />
          <input type="text" name="password"value={userDetails.password} onChange={(e)=>{handlechange(e)}} /> <br /> <br />
          <button type='Button' onClick={handleSubmit}>submit</button>

        </form>
    </div>
  )
}
export default Userform