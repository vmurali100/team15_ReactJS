import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Main } from "./Component/Main";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Help } from "./Component/Help";

function App() {
  return (
    <BrowserRouter>
      <ul>
      <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Main"}>Main</Link>
        </li>
        
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Help"}>Help</Link>
        </li>
      </ul>
      <h1>Welcome from the Reactjs</h1>
      <Routes>
        <Route path="/Main" index element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
