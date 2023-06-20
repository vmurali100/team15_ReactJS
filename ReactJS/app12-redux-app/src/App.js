import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement,  increment,  } from "./counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <h2>counter value is : {counter}</h2>
      <button
        onMouseOver={() => {
          dispatch(increment());
        }}
      >
        Increment count
      </button>
      <button
        onMouseOver={() => {
          dispatch(decrement());
        }}
      >
        Decrement count
      </button>
    </div>
  );
}

export default App;
