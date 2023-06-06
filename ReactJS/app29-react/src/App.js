import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import { Jaga } from './Components/Jaga';
import { Chandana } from './Components/Chandana';
import { Niharika } from './Components/Niharika';

function App() {
  return (
    <div className="App">
      <h1>we are comfatable with people</h1>
      <BrowserRouter>
      <ul>
        <li>
      <Link to={"/"}>Main</Link>
        </li>
        <li>
          <Link to={'/chandana'}>Chandana</Link>
        </li>
        <li>
          <Link to={"./niharika"}>Niharika</Link>
        </li>

      </ul>
      <Routes>
        <Route path='/' index element={<Jaga/>}/>
        <Route path='/chandana' element={<Chandana/>}/>
        <Route path='/niharika' element={<Niharika/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
