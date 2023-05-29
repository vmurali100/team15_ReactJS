/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ClickCounter from './Componets-render-props/ClickCounter';

import HandelCounter from './Componets-render-props/HandelCounter';
import { HoverCounter1 } from './Componets-render-props/HoverCouner';



function App() {
  return (
    <div className="App">
      <HandelCounter
        render={(count, incrementCount, DecrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            DecrementCount={DecrementCount}
          />
        )}
      />
      <hr />
      <HandelCounter
        render={(count, incrementCount, DecrementCount) => (
          <HoverCounter1
            count={count}
            incrementCount={incrementCount}
            DecrementCount={DecrementCount}
          />
        )}
      />
    </div>
  );
}

export default App;
