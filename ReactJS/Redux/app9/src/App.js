/* eslint-disable no-unused-vars */

import "./App.css";
import { useDispatch } from "react-redux";
import MyComponent from "./Componets/User";




function App() {
  const dispatch = useDispatch();
 
  return (
    <div className="App">
<MyComponent/>
    </div>
  );
}

export default App;
