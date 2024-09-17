import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from './sliceCounter';


function App() {
const counter=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()
console.log(counter)
  return (
    
    <div className="App">
      <h1>Counter value is:{counter}</h1>
    <button onClick={()=>{dispatch(incrementCount())}}>IncrementCount+</button>
    <button onClick={()=>{dispatch(decrementCount())}}>DecrementCount-</button>
    </div>
  );
}

export default App;
