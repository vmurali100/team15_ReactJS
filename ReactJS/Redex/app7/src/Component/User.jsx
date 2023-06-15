import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deleteuser, Updatauser, adduser } from "../User.Slice";
const User = () => {
  const [user, setUser] = useState({
    name: "",
    fname: "",
    mname: "",
    number: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    blood: "",
    department: "",
    courses1: false,
    courses2:false,
    courses3:false,
    courses4:false,
  });
  const [isEdit, setIsEdit] = useState(false);
  const[index,setIndex]=useState(0)
  const allusers=useSelector((state)=>state.users.users)
  const dispatch = useDispatch();
  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;
    
    if (type === "checkbox") {
      newValue = checked;
    }
    
    setUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };
  const clearForm=()=>{
    setUser({
        name: "",
        fname: "",
        mname: "",
        number: "",
        email: "",
        gender: "",
        dob: "",
        address: "",
        blood: "",
        department: "",
        courses1: false,
        courses2:false,
        courses3:false,
        courses4:false,
    })

    
  }
  const handleAddUser = () => {
    dispatch(adduser(user));
    clearForm()
  };
  const handleUpdate=()=>{
    let newuser={...user}
    newuser["index"]=index
    dispatch(Updatauser(newuser))
    clearForm()
  }
  const handleEdit=(usr,i)=>{
    setUser(usr)
    setIsEdit(true)
    setIndex(i)
  }
  const handleDelete=(i)=>{
dispatch(Deleteuser(i))
  }

  return (
    <div>
      <form>
        <h1>Student Registration Form</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="fname">Father Name:</label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="mname">Mother Name:</label>
        <input
          type="text"
          name="mname"
          value={user.mname}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="number">Phone Namuber:</label>
        <input
          type="text"
          name="number"
          value={user.number}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={user.gender === "Male"}
          onChange={(e) => handlechange(e)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="famele"
          checked={user.gender === "famele"}
          onChange={(e) => handlechange(e)}
        />{" "}
        famele
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={user.gender === "Other"}
          onChange={(e) => handlechange(e)}
        />{" "}
        Other <br />
        <br />
        <label htmlFor="dob">Date of birth:</label>
        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={(e) => handlechange(e)}
        />{" "}
        (dd/mm/yyy) <br />
        <br />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="blood">Blood Group:</label>
        <select
          name="blood"
          value={user.blood}
          onChange={(e) => handlechange(e)}
        >
          <option value="">select</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
        </select>
        <br />
        <br />
        <label htmlFor="department">Department:</label>
        <input
          type="radio"
          name="department"
          value="mech"
          checked={user.department === "mech"}
          onChange={(e) => handlechange(e)}
        />
        mech
        <input
          type="radio"
          name="department"
          value=" civil"
          checked={user.department === "civil"}
          onChange={(e) => handlechange(e)}
        />
        civil
        <input
          type="radio"
          name="department"
          value="It"
          checked={user.department === "It"}
          onChange={(e) => handlechange(e)}
        />
        It
        <br />
        <br />
        <label htmlFor="courses1">Course:</label>
        <input
          type="checkbox"
          name="courses1"
          value="HTML"
          checked={user.courses1}
          onChange={(e) => handlechange(e)}
        />
        HTML
        <input
          type="checkbox"
          name="courses2"
          value="CSS"
          checked={user.courses2}
          onChange={(e) => handlechange(e)}
        />
        CSS
        <input
          type="checkbox"
          name="courses3"
          value=" JavaScript"
          checked={user.courses3}
          onChange={(e) => handlechange(e)}
        />
        JavaScript
        <input
          type="checkbox"
          name="courses4"
          value="ReactJs"
          checked={user.courses4}
          onChange={(e) => handlechange(e)}
        />
        ReactJs
        <br />
        <br />
        {isEdit ? (
          <button onClick={handleUpdate} type="button">
            UpdateUsers
          </button>
        ) : (
          <button type="button" onClick={handleAddUser}>
            AddUsers
          </button>
        )}
      </form>
      <hr />
      <br />
      <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>FatherName</th>
              <th>MotherName</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Blood Group</th>
              <th>Department</th>
              <th>Courses</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.fname}</td>
                  <td>{usr.mname}</td>
                  <td>{usr.number}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.dob}</td>
                  <td>{usr.address}</td>
                  <td>{usr.blood}</td>
                  <td>{usr.department}</td>
                  <td>
                 {usr.courses1 ?"HTML":""}
                 {usr.courses2 ? "CSS":""}
                 {usr.courses3 ? "JAVASCPIT":""}
                 {usr.courses4 ? "REACTJS":""}
                 
                  </td>
                  <td
                
                  >
                   <button  onClick={() => {
                     handleEdit(usr, i);
                    }}>Edit</button>
                  </td>
                  <td
                  >
                    <button  onClick={() => {
                      handleDelete(i);
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};
export default User;
