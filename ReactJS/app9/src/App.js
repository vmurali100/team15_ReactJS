import logo from "./logo.svg";
import "./App.css";
import { Class } from "./Compenents/Class";
import { Student } from "./Compenents/Student";
import Reddy from "./Render/Reddy";
import Clickcounter from "./Render/Clickcounter";
import Hoverconter from "./Render/Hoverconter";
import Guna from "./Render/Guna";

function App() {
  return (
    <div className="App">
      <Guna
        render={(count, incrementcount, decrementcount) => 
          <Clickcounter
            count={count}
            incrementcount={incrementcount}
            decrementcount={decrementcount}
          />
        }
      />
      <Guna render={(count, incrementcount, decrementcount)=><Hoverconter count={count}
            incrementcount={incrementcount}
            decrementcount={decrementcount} />} />
    </div>
  );
}

export default App;
