import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Mian } from "./Component/Mian";
import { About } from "./Component/About";
import { Class } from "./Component/Class";

function App() {
  return (
    <div className="App">
      <h1>WE are Comrades</h1>
     
      <BrowserRouter>
      <ul>
        <li>
         
          <Link to={"/"}>Mian</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
        <Link to={"/Class"}>Class</Link>

        </li>
      </ul>
        <Routes>
          <Route path="/" index element={<Mian />} />
          <Route path="/about" element={<About />} />
          <Route path="/Class" element={<Class />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
