import logo from "./logo.svg";
import "./App.css";
import Student from "./Components/Student";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import HandleCounter from "./Components/HandleCounter";

function App() {
  return (
    <div className="App">
      {/* <Student /> */}
      {/* <ClickCounter/> */}
      <HandleCounter
        render={(count, incrementCount, decrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
      <hr />
      <HandleCounter
        render={(count, incrementCount, decrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
    </div>
  );
}

export default App;
