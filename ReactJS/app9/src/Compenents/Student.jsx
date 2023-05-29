import { useEffect, useState } from "react";
import axios from "axios";
import StudentTabel from "./StudentTabel";


export function Student() {
  // const[Studentname,setStudentname]=useState("Mahesh")
  const [Alluser, setAlluser] = useState([]);
  const handleEdit = () => {};
  useEffect 
    (() => {
        Server()
    },
    []);
    const Server=()=>{
        axios.get("http://localhost:3000/users").then((res) => {
            setAlluser(res.data);
          });
    }
     const handledelete=(usr)=>{
        axios.delete("http://localhost:3000/users/"+usr.id).then(()=>{
            Server()
        })
    }
  return (
    <div>
      {/* <h1>my Name:{Studentname}</h1>
        <button onClick={()=>{setStudentname("hello")}}>change</button> */}
      <StudentTabel users={Alluser} handleEdit={handleEdit} handledelete={handledelete}/>
    </div>
  );
}
