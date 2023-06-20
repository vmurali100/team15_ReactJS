import logo from './logo.svg';
import './App.css';
// import { Color1 } from './COMPONENTS/Color1';
// import { Color3 } from './COMPONENTS/Color3';
// import { Color2 } from './COMPONENTS/Color2';
// import { Color4 } from './COMPONENTS/Color4';
// import { Color5 } from './COMPONENTS/Color5';
// import { Course2 } from './COMPONENTS/Course2';
// import { Course1 } from './COMPONENTS/Course1';
// import { Fruits } from './COMPONENTS/Fruits';
// import { Fruits1 } from './COMPONENTS/Fruits1';
// import { Vegetables } from './COMPONENTS/Vegetables';
import { Student } from './TABLESDISPLAY/Student'; 
// import { User } from './TABLESDISPLAY/User';

function App() {
  return (
    <div className="App">
     {/* <Color1/> 
     <hr/>
     <Color2/>
     <hr/>
     <Color3/>
     <hr/>
     <Color4/>
     <hr/>
     <Color5/>
     <hr/>
     <Course1/>
     <hr/>
     <Course2/>
     <hr/>
     <Fruits/>
     <hr/>
     <Fruits1/>
     <hr/> 
     <Vegetables/> */} 
     <Student/>   
     {/* <User/> */}
    </div> 
  );
}
 
export default App;
  