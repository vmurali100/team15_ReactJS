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
      {/* <h2>Counter value is:{counter}</h2>
      <button onClick={()=>{dispatch(incrementCount())}}>IncrementCount</button>
      <button onClick={()=>{dispatch(decrementCount())}}>DecrementCount</button>
      <br></br> */}
      <h3>Counter value is:{counter}</h3>
      <button onMouseOver={()=>{dispatch(incrementCount())}}>IncrementCount</button>
      <button onMouseOver={()=>{dispatch(decrementCount())}}>DecrementCount</button>

    </div>
  );                    
}

export default App;
 