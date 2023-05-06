import logo from "./logo.svg";
import "./App.css";
import { Student } from "./Componets/Student/Student";
import { ParentComp } from "./Componets/Parent/ParentComp";
import { UsersComp } from "./Componets/Users.jsx/UsersComp";

function App() {
  return (
    <div className="App">
      {/* <Student /> */}
      {/* <ParentComp/> */}
      <UsersComp/>
    </div>
  );
}

export default App;
