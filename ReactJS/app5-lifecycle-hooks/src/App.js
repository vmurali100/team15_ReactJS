import logo from './logo.svg';
import './App.css';
import LifeCycleA from './Components/LifeCycleA';

function App() {
  return (
    <div className="App">
     <h2>Welcome to ReactJS Life Cylces</h2>
     
     {/* 1. Mounting Phase 
     2. Updating Phase 
     3. Un Mounting Phase  */}
     <LifeCycleA/>
    </div>
  );
}

export default App;
