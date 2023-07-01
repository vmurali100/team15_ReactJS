import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import Layout from "./Components/Layout";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/createUser" element={<Create/>}/>
        <Route path="/editUser" element={<Edit/>}/>
        <Route path="/deleteUser" element={<Delete/>}/>
        {/* <Route path="/users" element={<UserDetails/>} >
          <Route path=":/id" element={<MyUser/>} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
