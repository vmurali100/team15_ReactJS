import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsersAsync } from "./User.Slice";
import User from "./Component/User";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync())
  }, []);
  return <div className="App">
    <User/>
  </div>;
}

export default App;
