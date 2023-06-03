import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';


function App() {
  return (
    <div className="App">
     <ClickCounter />
      <hr/>
      <HoverCounter/>
     
    </div>
  );
}

export default App;
