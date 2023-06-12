import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "./counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <h2>Counter Value is : {counter}</h2>
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        Increment Count
      </button>
      <button
        onMouseOver={() => {
          dispatch(decrementCount());
        }}
      >
        Decrement Count
      </button>
    </div>
  );
}

export default App;
