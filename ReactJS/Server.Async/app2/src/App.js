import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import { getUsersAysnc } from './UserSlice';
import Table from './Component/Table';
function App() {
  const dispatch=useDispatch()
  useEffect(() => {}, [
    dispatch(getUsersAysnc())
  ])
  
  return (
    <div className="App">
    <Table/>
    </div>
  );
}

export default App;
