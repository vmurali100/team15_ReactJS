
import './App.css';
import { BrowserRouter, Route, Routes, Link, Router } from "react-router-dom";
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Main } from './Components/Main';
import { Rama } from './Components/Rama';
import { Sita } from './Components/Sita';
import { Apple } from './Components/Apple';
import { Ball } from './Components/Ball';
import { Car } from './Components/Car';
import { Laxman } from './Components/Laxman';

function App() {
  return (
    <div className="App">
      {/* <h2>Welcome to React Router Application !!</h2>
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
           
          <Route path="/" index element= {<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter> */}
      <h2>Welcome to React Router Application !!</h2>

      <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Laxman</Link>
        </li>
        <li>
        <Link to={"/ball"}>Rama</Link>
        </li>
        <li>
          <Link to={"/car"}>Sita</Link>
        </li>
      </ul>
      <Routes>
      <Route path="/" index element={<Laxman/>} />
          <Route path="/rama" element={<Rama/>} />
          <Route path="/sita" element={<Sita/>} />
      </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Apple</Link>
        </li>
        <li>
        <Link to={"/ball"}>Ball</Link>
        </li>
        <li>
          <Link to={"/car"}>Car</Link>
        </li>
      </ul>
      <Routes>
      <Route path="/" index element={<Apple/>} />
          <Route path="/ball" element={<Ball/>} />
          <Route path="/car" element={<Car/>} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
