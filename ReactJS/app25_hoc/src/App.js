import logo from "./logo.svg";
import "./App.css";
import JagaCounter from "./Components/JagaCounter";
import JagaHoverCounter from "./Components/JagaHoverCounter";


function App() {
  return (
    <div className="App">
    <JagaCounter/>
    <hr/>
    <JagaHoverCounter/>
    </div>
  );
}

export default App;
