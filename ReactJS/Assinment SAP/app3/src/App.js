import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "../Component/Home";
import { Contect } from "../Component/Contect";
import { Profile } from "../Component/Profile";
import { Help } from "../Component/Help";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Contect"}>Contect</Link>
        </li>
        <li>
          <Link to={"/Profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/Help"}>Help</Link>
        </li>
      </ul>
      <h1>Hello my Dear People Welcome to Your Website</h1>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
