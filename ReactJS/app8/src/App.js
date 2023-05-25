/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { Student } from './Componet/User';
import { Dilli } from './Componet/Dilli';
import { Dilliage } from './Componet/Dilli age';
import { Jaga } from './Componet/Jaga';
import { JagaAge } from './Componet/Jaga age';
import { Guna } from './Componet/Guna';
import { GunaAge } from './Componet/Guna age';
import { Yoga } from './Componet/Yoga';
import { YogaAge } from './Componet/Yoga Age';
import { Sudha } from './Componet/Sudha';
import { SudhaAge } from './Componet/Sudha Age';


function App() {
  return (
    <div className="App">
      <Student/>
      <hr/>
      <Dilli/>
      <hr/>
      <Dilliage/>
      <hr/>
    <Jaga/>
    <hr/>
   <JagaAge/>
   <hr/>
   <Guna/>
   <hr/>
   <GunaAge/>
   <hr/>
   <Yoga/>
   <hr/>
   <YogaAge/>
   <hr/>
   <Sudha/>
   <hr/>
   <SudhaAge/>
    </div>
  );
}

export default App;
