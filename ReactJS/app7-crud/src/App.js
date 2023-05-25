import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { Student } from './Components/Student';
import { Employee } from './Components/Employee';

function App() {
  return (
    <div className="App">
     <User/>
     <hr/>
     <Student/>
     <hr/>
     <Employee/>
    </div>
  );
}

export default App;
