import React from "react";
import { useState } from "react";
import { UserContextProvider } from "../Context/UserContext";
import GrandParent from "./GrandParent";

const Main = () => {
  const [message, setMessage] = useState("Welcome to Chittoor !!");
  return (
    <div>
      <h2>Welcome to Main Component !!</h2>
      <hr />
      <UserContextProvider value={message}>
        <GrandParent />
      </UserContextProvider>
    </div>
  );
};

export default Main;
