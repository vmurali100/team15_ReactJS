import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <h2>counter value is: {counter}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
