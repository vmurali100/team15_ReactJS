import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsersAsync } from './usersSlice';
import User from './User';

function App() {
  const dispatch=useDispatch();
  // useEffect(()=>{},[
  //   dispatch(getUsersAsync())
  // ])
  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
