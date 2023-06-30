
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siva from "./Components/Siva";
import EditUser from "./Components/EditUser";
import DeleteUser from "./Components/DeleteUser";
import CreateUser from "./Components/CreateUser";
import Navbar from "./Components/Navbar";
import Dilli from "./Components/Dilli";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Siva />} />
          <Route index element={<Dilli />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
