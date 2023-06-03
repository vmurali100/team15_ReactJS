import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Kriesh } from "./Componets/Kriesh";
import { Mahesh } from "./Componets/Mahesh";
import { Prince } from "./Componets/Prince";


function App() {
  return (
    <div className="App">
      <h2>Welcome to React Router Application !!</h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Krish</Link>
          </li>
          <li>
            <Link to={"/about"}>Mahesh</Link>
          </li>
          <li>
            <Link to={"/contact"}>Prince</Link>
          </li>
        </ul>
        <Routes>
          
          <Route path="/" index element={<Kriesh/>} />
          <Route path="/about" element={<Mahesh/>} />
          <Route path="/contact" element={<Prince/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
