import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Yoga } from './Componets/Yoga';
import { Nanda } from './Componets/Nanda';
import { Dilli } from './Componets/Dilli';

function App() {
  return (
    <div className="App">
      <h1>My Brother is YogaNanda Reddy</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Yoga</Link>
        </li>
        <li>
          <Link to={"/nanda"}>Nanda</Link>
        </li>
        <li>
          <Link to={"/dilli"}>Dilli</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' index element={<Yoga/>}/>
        <Route path='/nanda' element={<Nanda/>}/>
        <Route path='/dilli'element={<Dilli/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
