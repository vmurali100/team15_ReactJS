import React, { useEffect, useState } from "react";
import axios from "axios";
import JagadeeshTable from "./JagadeeshTable";

export default function Jagadeesh() {
  // const[name,setname]=useState("jaga")
  const [allusers, setAllUsers] = useState([]);
  useEffect  (() => {
    latestdatafromserver()
  },[]);
  const latestdatafromserver=()=>{
    axios.get("http://localhost:3000/jagu").then((res) => {
      setAllUsers(res.data);
    });
  }
  const handleedit=()=>{

  }
  const handledelete=(usr)=>{
    axios.delete("http://localhost:3000/jagu/"+usr.id).then(()=>{
      latestdatafromserver()
    })

  }

  return (
    <div>
      {/* <h1>my name is:{name}</h1>
      <button onClick={()=>{setname("Jagadeesh")}}>
    Username
      </button> */}
      <JagadeeshTable
        users={allusers}
        handleedit={handleedit}
        handledelete={handledelete}
      />
    </div>
  );
}
