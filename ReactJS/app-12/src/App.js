import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Main } from "./Componets/Main";
import { About } from "./Componets/About";
import { Profaile } from "./Componets/Profaile";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Router Application !!</h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Routes>
          {/* <Route path="/" index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" index element= {<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Profaile/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
