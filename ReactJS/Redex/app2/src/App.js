import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementcount, incrementcount } from './CounterSlice';

function App() {
  const counter=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  // console.log(counter)
  return (
    <div className="App">
   <h1>counter value is:{counter}</h1>
   <button onMouseOver={()=>{dispatch(incrementcount())}}>increment count</button>
   <button onMouseOver={()=>{dispatch(decrementcount())}}>decrement count</button>

    </div>
  );
}

export default App;
