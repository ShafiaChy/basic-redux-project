import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Confidential info</h3> : ""}
    </div>
  );
}

export default App;
