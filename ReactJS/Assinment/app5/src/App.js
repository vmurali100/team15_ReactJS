import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes}from "react-router-dom"
import User from './Component/User';
import EditUser from './Component/EditUser';
import DeleteUser from './Component/DeleteUser';
import CreateUser from './Component/CreateUser';
import NavBar from './Component/NavBar';
import Amma from './Component/Amma';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
<NavBar/>
  <Routes>
    <Route index element={<Amma/>}/>
    <Route path='/' element={<User/>}/>
    <Route path='/Edit/:id' element={<EditUser/>}/>
    <Route path='/Delete/:id' element={<DeleteUser/>}/>
    <Route path='/Create' element={<CreateUser/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
