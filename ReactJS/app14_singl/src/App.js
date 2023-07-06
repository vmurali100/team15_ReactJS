/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import Layout from "./Components/Layout";
import { Users } from "./Components/Users";
import { Users1 } from "./Components/Users1";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/createUser" element={<Create />} />
          <Route path="/editUser" element={<Edit />} />
          <Route path="/deleteUser" element={<Delete />} />
          <Route path="/users" element={<Users />}>
            <Route path=":/id" element={<Users1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
