import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import{BrowserRouter,Routes,Route}from "react-router-dom"
import CreateUser from './Component/CreateUser';
import DeleteUser from './Component/DeleteUser';
import EditUser from './Component/EditUser';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<CreateUser/>}/>
        <Route path='/Delete' element={<DeleteUser/>}/>
        <Route path='/Edit' element={<EditUser/>}/>

       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
