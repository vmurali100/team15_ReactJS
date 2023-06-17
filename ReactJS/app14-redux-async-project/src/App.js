import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsersAsync } from './usersSlice';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{},[
    dispatch(getUsersAsync())
  ])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
