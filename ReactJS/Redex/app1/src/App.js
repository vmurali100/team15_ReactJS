import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { derementcount, incrementcount } from './CounterSlice';

function App() {
  const counter=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  console.log(counter)
  return (
    <div className="App">
      <h1>counter value is:{counter}</h1>
      <button onClick={()=>{dispatch(incrementcount())}}>increment count</button>
      <button onClick={()=>{dispatch(derementcount())}}>decrement count</button>

    </div>
  );
}

export default App;
