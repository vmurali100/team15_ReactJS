import logo from "./logo.svg";
import "./App.css";
import Jaga from "./Components/Jaga";
import JagaCounter from "./Components/JagaCounter";
import JagaHoverCounter from "./Components/JagaHoverCounter";
import ViharikaCounter from "./Components/ViharikaCounter";
import ViharikaHoverCounter from "./Components/ViharikaHoverCounter";

function App() {
  return (
    <div className="App">
      {/* <Jaga/> */}
      {/* <JagaCounter/> */}
      <ViharikaCounter
        render={(count, increment, decrement) => (
          <JagaCounter
            count={count}
            increment={increment}
            decrement={decrement}
          />
        )}
      />
      <hr />
      {/* <JagaHoverCounter/> */}
      <ViharikaHoverCounter
        render={(count, increment, decrement) => (
          <JagaHoverCounter
            count={count}
            increment={increment}
            decrement={decrement}
          />
        )}
      />
    </div>
  );
}

export default App;
