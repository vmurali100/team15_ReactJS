import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import { Yuvi } from './Componets/Yuvi';
import { Raina } from './Componets/Raina';
import { Dhoni } from './Componets/Dhoni';

function App() {
  return (
    <div className="App">
      <h1>we Love Cricket</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Yuvi</Link>

        </li>
        <li>
          <Link to={"/raina"}>Raina</Link>
        </li>
        <li>
          <Link to={"./dhoni"}>Dhoni</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' index element={<Yuvi/>}/>
        <Route path='/raina' element={<Raina/>}/>
        <Route path='/dhoni' element={<Dhoni/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
