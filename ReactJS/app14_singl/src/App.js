import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Dilli } from "./Componets/Dilli";
import { Main } from "./Componets/Main";
import { User } from "./Componets/User";
function App() {
  return (
    <div className="App">
      <h2>Welcome to App Application !!</h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Dilli</Link>
          </li>
          <li>
            <Link to={"/about"}>Main</Link>
          </li>
          <li>
            <Link to={"/contact"}>User</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" index element={<Dilli />} />
          <Route path="/about" element={<Main />} />
          <Route path="/contact" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
