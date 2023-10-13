import logo from './logo.svg';
import './App.css';
import { Users } from './Component/Users';
import { Table } from './Component/Table';
import { Timetable } from './Component/Timetable';

function App() {
  return (
    <div className="App">
     <Users/>
     <hr/>
     <Table/>
     <hr/>
     <Timetable/>
    </div>
  );
}

export default App;
